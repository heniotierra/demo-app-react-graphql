FROM node:15.0.0

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY package.json ./

COPY package-lock.json ./

RUN npm cache clean --force

RUN npm install

RUN npm install react-scripts@3.4.1 -g --silent

COPY . .

CMD [ "npm", "run", "start-dev" ]
