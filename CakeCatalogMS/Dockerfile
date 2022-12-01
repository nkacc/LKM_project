FROM node:current-alpine

# setup express app :

WORKDIR /srv/catalog/
COPY ./catalog/ .
RUN npm i

EXPOSE 6511

# setup mongoDB :

RUN mkdir /srv/db

RUN echo 'http://dl-cdn.alpinelinux.org/alpine/v3.9/main' >> /etc/apk/repositories
RUN echo 'http://dl-cdn.alpinelinux.org/alpine/v3.9/community' >> /etc/apk/repositories
RUN apk update
RUN apk add mongodb

## VOLUME /srv/db # better to use -v /srv/CakeCatalogMS/DB:/srv/db

# setup supervisor :

RUN apk add supervisor

WORKDIR /srv

COPY ./supervisord.conf /etc/supervisord.conf
COPY ./startup.sh .

CMD ["ash", "/srv/startup.sh"]
