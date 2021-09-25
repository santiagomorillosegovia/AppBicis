FROM node:16.10.0-alpine

WORKDIR /workdi/

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3001

CMD ["npm","start"]


