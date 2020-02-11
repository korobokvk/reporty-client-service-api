FROM node:10.16
WORKDIR /usr/src/app
COPY package.json package.json 
RUN npm install
RUN npm run build
ENV AUTH_SERVICE_URL=host.docker.internal:3020
COPY /dist /usr/src/app
COPY tsconfig.build.json tsconfig.build.json

CMD ["npm", "run", "start:prod"]