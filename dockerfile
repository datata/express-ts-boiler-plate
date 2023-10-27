FROM node:20.9.0-alpine

WORKDIR /app

COPY . /app/

RUN npm install

CMD ["npm", "run", "dev"]