FROM node:alpine
WORKDIR "/appnode"
COPY ./appnode/package.json ./
RUN npm install
COPY ./appnode/ .
CMD ["npm", "run", "start.dev"]