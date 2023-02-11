import math
from fastapi import FastAPI, Query, HTTPException, Request
from fastapi.responses import JSONResponse, PlainTextResponse
from fastapi.exceptions import RequestValidationError
from fastapi.responses import PlainTextResponse

app = FastAPI()


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
