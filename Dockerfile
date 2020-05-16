FROM node:stretch-slim as uibuilder

# UI
COPY ./package*.json ./tsconfig.json /app/
COPY  ./public /app/public
COPY ./src /app/src
RUN cd /app && \
    npm ci && \
    npm run build

# API
FROM node:stretch-slim as apibuilder

COPY ./server/package*.json ./server/tsconfig.json /server/
COPY  ./server/src /server/src
RUN cd server && \
    npm ci && \
    npm run build

FROM ubuntu

ENV NODE_ENV=production

# Updates and nginx
RUN apt-get update -y && \
    apt-get install nginx curl -y && \
    rm -f /var/nginx/nginx.conf

# NodeJS LTS
RUN curl -sL https://deb.nodesource.com/setup_12.x | bash - && \
    apt-get install nodejs -y && \
    npm install pm2 -g

COPY --from=apibuilder /server/dist/Application.js /opt/rpgme/Application.js
COPY --from=apibuilder /server/dist/node_modules /opt/rpgme/node_modules
COPY --from=uibuilder /app/build/ /var/www/rpgme/
COPY ./config/rpgme.conf /etc/nginx/nginx.conf
COPY ./config/server-start.sh /opt/rpgme/server-start.sh

RUN chmod +x /opt/rpgme/server-start.sh && \
    rm -rf /var/lib/apt/lists/* 

EXPOSE 80

CMD ["/bin/bash", "./opt/rpgme/server-start.sh"]