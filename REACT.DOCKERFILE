FROM node:alpine

WORKDIR "/React"

COPY ./React/package.json ./

RUN yarn install

COPY ./React/ .


CMD ["yarn", "dev"]
