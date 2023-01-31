FROM python:3.11
RUN apt-get update && \
    apt-get -y install locales && \
    localedef -f UTF-8 -i ja_JP ja_JP.UTF-8

COPY ./src /src/
WORKDIR /src

RUN pip install --upgrade pip
RUN pip install -r requirements.txt