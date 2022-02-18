# get latest stable version
FROM node:16.14.0-alpine

WORKDIR /server

COPY . .

RUN npm install

# sync server port
EXPOSE 3001

CMD ["node", "app.js"]