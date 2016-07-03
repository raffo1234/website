# NODEJS

FROM node:0.12

ADD . /srv/www/website
WORKDIR /srv/www/website

EXPOSE 8012

RUN npm install nodemon -g
RUN npm install

CMD ["nodemon", "server.js"]