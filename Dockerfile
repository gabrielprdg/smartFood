FROM node:14
WORKDIR /usr/src/smartFood
COPY ./package.json .
RUN npm install --only=prod