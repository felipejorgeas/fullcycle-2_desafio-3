FROM node:14.1-alpine

WORKDIR /usr/src/fullcycle-2_desafio-3

COPY package*.json ./

RUN npm install
RUN npm run build

COPY public ./public
COPY views ./views
COPY dist ./dist

EXPOSE 3000

CMD [ "npm", "run", "start:prod" ]