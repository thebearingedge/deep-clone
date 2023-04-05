FROM docker.io/node:18-alpine

RUN mkdir -p /home/node/deep-clone

WORKDIR /home/node/deep-clone

COPY package.json package-lock.json ./

RUN npm ci

COPY . ./

RUN npm run build
