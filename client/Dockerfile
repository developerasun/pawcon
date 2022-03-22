# get Node js stable version
FROM node:16.14.0-alpine

# create a server directory and set it as working directory
RUN mkdir -p /pawcon/client
WORKDIR /pawcon/client

# install dependency
COPY ./package.json .
RUN npm install

# copy all client file
COPY . .

# set container port 3000
EXPOSE 3000

# run React at port 3000
CMD ["npm", "start"]