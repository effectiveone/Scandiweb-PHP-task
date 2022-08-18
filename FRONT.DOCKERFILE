FROM node:alpine 
WORKDIR "/appreact"
COPY ./appreact/package.json ./
RUN npm install
COPY ./appreact/ .
#RUN npm run build
CMD ["npm", "run", "start"]