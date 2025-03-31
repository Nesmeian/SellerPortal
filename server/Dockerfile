FROM node:22
RUN npm install -g nodemon
WORKDIR /

COPY package.json ./

RUN npm install

COPY . .

EXPOSE 8080

CMD ["nodemon", "./src/server.js"]