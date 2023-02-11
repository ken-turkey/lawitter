FROM node:18

COPY ./app /app/
WORKDIR /app
ENV NODE_OPTIONS --openssl-legacy-provider
RUN npm install