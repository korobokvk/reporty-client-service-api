FROM node:10.16
WORKDIR /usr/src/app
RUN npm run build
ENV AUTH_SERVICE_URL=host.docker.internal
COPY /dist /usr/src/app

CMD ["npm", "run", "start:prod"]