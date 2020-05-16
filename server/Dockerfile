FROM node:stretch-slim

ENV NODE_ENV="production"

COPY ./tsconfig.json ./app/tsconfig.json
COPY ./package-lock.json ./app/package-lock.json
COPY ./package.json ./app/package.json
COPY ./src ./app/src

RUN cd app && \
    npm ci && \
    npm run build
    
CMD ["node", "./app/dist/Application.js"]
