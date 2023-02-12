import math
from fastapi import FastAPI, Query, HTTPException, Request, Response
from fastapi.responses import JSONResponse, PlainTextResponse
from fastapi.exceptions import RequestValidationError
from fastapi.responses import PlainTextResponse
from fastapi.middleware.cors import CORSMiddleware
import os
import slack


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


@app.post("/v1/startwindow/login")


    
@app.post("/v1/startwindow/create")
def create():


    

@app.post("/v1/configwindow/set_time")
def set_time(Request):
    if Request['wake_time'] == None or Request['late_text'] == None:
        detail = '起床時間または文章が設定されていません。'
        return {'status': False, 'detail': detail}
    else:
        wake_time = Request['wale_time']
        late_text = Request['late_time']
        return {'status': True, 'wake_time': wake_time, 'late_text': late_text}


@app.get("/v1/configwindow/req_time")
def req_time(wake_time, late_text):
    return {'status': True, 'wake_time': wake_time, 'late_text': late_text}


client_id = os.environ['SLACK_CLIENT_ID']
client_secret = os.environ['SLACK_CLIENT_SECRET']
#ここにアプリが要求するスコープを追加します。
oauth_scope = ",".join([
  "channels:read",
  "chat:write",
  "chat:write.customize"
  ]) #os.environ["SLACK_BOT_SCOPE"]
uuids = []


@app.route("/begin_auth", methods=["GET"])
def pre_install():
    """slackのOAuth認証ページに飛ばすリンクを作成し、表示させます。"""
    from uuid import uuid4
    state_string = str(uuid4())
    uuids.append(state_string)
    return f'<a href="https://slack.com/oauth/v2/authorize?scope={ oauth_scope }&client_id={ client_id }&state={ state_string}">Add to Slack</a>'
    

@app.route("/finish_auth", methods=["GET", "POST"])
def post_install():
    """認証が終わった後、リダイレクトされたアクセスの処理です"""
    auth_code = Request.args['code']
    state_code = Request.args['state']

    #state_codeが一致しなければ401
    if not state_code in uuids:
        return Response("", 401)
    else:
        uuids.remove(state_code)

    #認証をするには空白のトークンでクライアントを作成します。
    client = slack.WebClient(token="")

    #認証トークンを要求します。
    response = client.oauth_v2_access(
        client_id=client_id,
        client_secret=client_secret,
        code=auth_code
    )

    #スラックボットトークンをDBなどに保存します。
    SLACK_BOT_TOKEN = response['access_token']

    #ユーザーに成功を伝えるのを忘れないでください！
    return Response("認証成功!!", 200)