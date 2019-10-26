FROM node:10-alpine

WORKDIR /usr/src/app

COPY ./StockMarketBack/dist/. .

RUN npm install --production

CMD node server.js
