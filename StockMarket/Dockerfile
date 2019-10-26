FROM node:10-alpine

WORKDIR /usr/src/app

COPY ./StockMarket/server/dist/. .

RUN npm install --production

CMD node server.js
