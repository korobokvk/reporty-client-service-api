# FROM node:latest
# WORKDIR /usr/src/app
# RUN npm run build
# COPY . /usr/src/app

# CMD ["npm", "run", "start:prod"]
FROM node:latest
WORKDIR /usr/src/app
COPY package.json package.json 
RUN npm install
COPY . /usr/src/app

CMD ["npm", "run", "start:dev"]