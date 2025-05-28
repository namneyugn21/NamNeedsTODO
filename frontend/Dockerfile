# frontend/Dockerfile

# ——— build stage ———
FROM node:18-alpine AS builder
WORKDIR /app

# copy manifest and config
COPY package*.json vite.config.js index.html ./
# copy the rest
COPY public/ ./public/
COPY src/    ./src/

# install & build
RUN npm ci
RUN npm run build

# ——— runtime stage ———
FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
