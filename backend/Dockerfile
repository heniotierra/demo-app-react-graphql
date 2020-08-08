FROM node:10-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

#RUN npm ci --only=production

COPY . .

EXPOSE 8000

CMD [ "npm", "start" ]

