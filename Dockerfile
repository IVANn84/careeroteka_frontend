FROM node:13.12.0-alpine as build
WORKDIR /app
COPY package*.json .
RUN yarn install
COPY . .
RUN yarn build
