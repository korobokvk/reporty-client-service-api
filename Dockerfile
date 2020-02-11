FROM node:latest
WORKDIR /usr/src/app
RUN npm run build
COPY dist /usr/src/app

CMD ["npm", "run", "start:prod"]