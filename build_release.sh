#!/bin/bash

docker build -t back/stockmkt . -f ./StockMarketBack/Dockerfile
docker build -t front/stockmkt . -f ./StockMarket/Dockerfile
