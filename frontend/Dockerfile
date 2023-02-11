FROM node:18

COPY ./app /app/
WORKDIR /app
RUN export NODE_OPTIONS=--openssl-legacy-provider
RUN npm install