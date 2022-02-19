# get latest stable version
FROM node:16.14.0-alpine

WORKDIR /pawcon
RUN mkdir -p /pawcon/client
RUN mkdir -p /pawcon/server

# layer caching to lesson build time
COPY package.json /server

# install server dependency
RUN npm install

# copy all server file
COPY . /server

# get React build file for Express
COPY ../client/build/index.html /client

# set container port 3001 
EXPOSE 3001

# run server at container port 3001
CMD ["node", "app.js"]