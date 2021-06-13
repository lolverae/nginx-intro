FROM node:12-stretch

USER node

WORKDIR /home/node/code

COPY /app .

RUN npm install

CMD ["node","index.js"]
