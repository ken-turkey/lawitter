from sqlalchemy import Boolean, Column, Integer, String, create_engine
from sqlalchemy import create_engine
from sqlalchemy.orm import scoped_session, sessionmaker,declarative_base
from dotenv import load_dotenv
load_dotenv()

import os

DB_USER = os.getenv('MYSQL_USER')
PASSWORD = os.getenv('MYSQL_PASSWORD')
DATABASE = os.getenv('MYSQL_DATABASE')

user = DB_USER
password = PASSWORD
db_name = DATABASE
print(f'Connecting to {db_name} as {user}')

# engineの設定
engine = create_engine(f'mysql://{user}:{password}@db:3306/{db_name}')

# セッションの作成
db_session = scoped_session(
  sessionmaker(
    autocommit=False,
    autoflush=False,
    bind=engine
  )
)

# テーブルを作成する
Base = declarative_base()
Base.query  = db_session.query_property()

# Userテーブルの定義
class User(Base):
    __tablename__ = 'users'
    id = Column('id', Integer, primary_key = True)
    name = Column('name', String(200))
    password = Column('password', String(200))

class WakeUpTime(Base):
    __tablename__ = 'wake_up_time'
    id = Column('id', Integer, primary_key = True)
    user_id = Column('user_id', Integer)
    date = Column('date', String(200))
    wake_up_time = Column('wake_up_time', String(200))
    late_text = Column('late_text', String(200))

class Slack(Base):
    __tablename__ = 'slack'
    id = Column('id', Integer, primary_key = True)
    user_id = Column('user_id', Integer)
    token = Column('token', String(200))
    channel = Column('channel', String(200))


class IsWakeUp(Base):
    __tablename__ = 'is_wake_up'
    id = Column('id', Integer, primary_key = True)
    user_id = Column('user_id', Integer)
    date = Column('date', String(200))
    is_wake_up = Column('is_wake_up',Boolean , default=False)


# テーブル作成
Base.metadata.create_all(bind=engine)