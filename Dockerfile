FROM node:22-alpine AS build

RUN apk add --no-cache --virtual .gyp python3 make g++

WORKDIR /app
ENV NODE_ENV=production

COPY package.json package-lock.json .npmrc ./
RUN npm ci --no-audit --no-fund

COPY . .
RUN npm run build

FROM nginx:alpine

COPY --from=build --chown=nginx:nginx /app/public /usr/share/nginx/html
