FROM docker.io/node:18-alpine

USER node

WORKDIR /home/node/deep-clone

COPY package.json package-lock.json ./

RUN npm ci

COPY . ./

RUN npm run build
