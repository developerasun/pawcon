# get Node js stable version
FROM node:16.14.0-alpine

# create a server directory and set it as working directory
RUN mkdir -p /pawcon/server
WORKDIR /pawcon/server

# install dependency : should install nodemon -g
COPY ./package.json .
RUN npm install
RUN npm install -g nodemon 

# copy all server file
COPY . .

# set container port 300
EXPOSE 3001

# run server at container port 8080
CMD ["nodemon", "app.js"]