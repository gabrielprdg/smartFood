FROM node:14
WORKDIR /usr/src/smartFood
COPY ./package.json .
COPY . .
RUN npm install --only=prod