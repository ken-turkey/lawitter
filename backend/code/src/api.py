import datetime
from fastapi import FastAPI, Depends
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy.orm import Session, sessionmaker
from pydantic import BaseModel
from starlette.requests import Request

# import slack

from database import *


app = FastAPI()

origins = [
    "http://localhost",
    "http://0.0.0.0:3000",
    "http://localhost:3000",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

# DB接続のセッションを各エンドポイントの関数に渡す
def get_db(request: Request):
    return request.state.db

class UserInfo(BaseModel):
    name: str
    password: str
    
@app.post("/v1/startwindow/create/")
def create(userInfo :UserInfo ,db: Session = Depends(get_db)):
    name = userInfo.name
    password = userInfo.password
    if name == None or password == None:
        detail = '名前またはパスワードが設定されていません。'
        return {'status': False, 'details': detail}
    else:
        user = User(name=name, password=password)
        db.add(user)
        db.commit()
        return {'status': True, 'name': name, 'password': password}
    
@app.post("/v1/startwindow/login/")
def create(userInfo :UserInfo ,db: Session = Depends(get_db)):
    name = userInfo.name
    password = userInfo.password
    if name == None or password == None:
        detail = '名前またはパスワードが設定されていません。'
        return {'status': False, 'detail': detail}
    else:
        user = db.query(User).filter(User.name == name).first()
        if user.password == password:
            return {'status': True, 'jwt-key': "jwtjwtjwt", "refresh-key": "refkey"}
        else:
            return {'status': False, 'details': "パスワードが違います。"}

class TimeData(BaseModel):
    wake_time: str
    late_text: str

@app.post("/v1/configwindow/set_time/")
def create(timeData :TimeData ,db: Session = Depends(get_db)):
    wake_time = timeData.wake_time
    late_text = timeData.late_text
    if wake_time == None or late_text == None:
        detail = '値が設定されていません。'
        return {'status': False, 'detail': detail}
    else:
        wakeUpTime = WakeUpTime(
            user_id = 1,
            date = datetime.datetime.now(),
            wake_time=wake_time,
            late_text=late_text
            )
        db.add(wakeUpTime)
        db.commit()
        return {'status': True}

@app.get("/v1/configwindow/req_time/")
def create(db: Session = Depends(get_db)):
    user_id = 1,
    wakeUpTime = db.query(WakeUpTime).filter(WakeUpTime.user_id == user_id).first()
    return {
        'status': True,
        'wake_time': wakeUpTime.wake_time,
        'late_text': wakeUpTime.late_text
        }

class SlackData(BaseModel):
    slack_token: str
    slack_channel: str

@app.post("/v1/configwindow/set_slack/")
def create(slackData :SlackData ,db: Session = Depends(get_db)):
    slack_token = slackData.slack_token
    slack_channel = slackData.slack_channel
    if slack_token == None or slack_channel == None:
        detail = '値が設定されていません。'
        return {'status': False, 'detail': detail}
    else:
        user_id = 1,
        slack = Slack(user_id = user_id,token=slack_token, channel=slack_channel)
        db.add(slack)
        db.commit()
        return {'status': True}

# リクエストの度に呼ばれるミドルウェア DB接続用のセッションインスタンスを作成
@app.middleware("http")
async def db_session_middleware(request: Request, call_next):
    request.state.db = SessionLocal()
    response = await call_next(request)
    request.state.db.close()
    return response