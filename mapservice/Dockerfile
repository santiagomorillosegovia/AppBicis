FROM node:16.10.0-alpine

WORKDIR /work/

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3002

CMD ["npm","start"]


