FROM node:12.16.3-alpine3.11

WORKDIR /app

COPY . .
RUN npm install && npm run build

EXPOSE 3000

CMD npm run start