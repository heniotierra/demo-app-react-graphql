FROM node:15.0.0

WORKDIR /app

COPY package*.json ./

RUN npm cache clean --force

RUN npm install

#RUN npm ci --only=production

COPY . .

EXPOSE 8000

CMD [ "npm", "start" ]

