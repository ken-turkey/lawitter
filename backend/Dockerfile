FROM python:3.11

RUN apt-get update && \
    apt-get -y install locales && \
    localedef -f UTF-8 -i ja_JP ja_JP.UTF-8

RUN mkdir /code
COPY code /code/
WORKDIR /code

RUN pip install --upgrade pip
RUN pip install -r requirements.txt
RUN pip install -e .

WORKDIR /code/src
# CMD ["uvicorn", "main:app", "--reload", "--host", "0.0.0.0", "--port", "8081"]