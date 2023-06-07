# Etapa de compilación
FROM node:16.13-alpine as builder

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm install

COPY . .

EXPOSE 4200
CMD ["npm", "start", "--", "--host", "0.0.0.0", "--poll", "1000"]
