# syntax=docker/dockerfile:1

FROM node:18-alpine

WORKDIR /usr/src/app

# install only production deps
COPY package*.json ./
RUN npm ci --omit=dev

# copy source
COPY . .

# tell your app where Mongo is
ENV MONGO_URI="mongodb://mongo:27017/namneedstodo"
ENV PORT=3000

EXPOSE 3000

# adjust if your entrypoint is index.js or app.js
CMD ["node", "app.js"]
