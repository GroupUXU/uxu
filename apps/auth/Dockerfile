FROM node:18

WORKDIR /usr/src/app

COPY package*.json ./
COPY yarn.lock ./

# Instalujemy zależności, w tym zależności deweloperskie
RUN yarn install

# Instalujemy `nodemon` globalnie
RUN yarn global add nodemon

COPY . .

EXPOSE 3000

CMD ["yarn", "run", "start:dev"]
