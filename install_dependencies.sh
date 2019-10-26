#!/bin/bash

## Dependencies for frontend
cd StockMarket
npm install

## Dependencies for frontend server
cd server
npm install

cd ..
cd ..
## Dependencies for backend
cd StockMarketBack
npm install
cd ..