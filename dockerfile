FROM node:14.20

WORKDIR /usr/src/app

COPY . .

RUN npm install && npm install -g @angular/cli@14.2.11

EXPOSE 4200

CMD ng serve --host 0.0.0.0 --poll 1000

