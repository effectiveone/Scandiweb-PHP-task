FROM node:alpine

WORKDIR /React

COPY ./React/package.json ./React/yarn.lock ./

# Install dependencies
RUN yarn install --frozen-lockfile

COPY ./React/ .

EXPOSE 3000

CMD ["yarn", "start"]
