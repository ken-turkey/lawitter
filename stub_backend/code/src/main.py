import math
from fastapi import FastAPI, Query, HTTPException, Request
from fastapi.responses import JSONResponse, PlainTextResponse
from fastapi.exceptions import RequestValidationError
from fastapi.responses import PlainTextResponse
from fastapi.middleware.cors import CORSMiddleware


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

class TooLargeResultException(Exception):
    def __init__(self, name):
        self.name = name


@app.post("/v1/startwindow/login")
def login():
    return  {
            "status": True,
            "details": "Falseだった時の詳細メッセージ",
            "jwt-key": "jwtkey",
            "refresh-key": "refkey",
        }
