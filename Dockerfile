FROM node:10.16
WORKDIR /usr/src/app
COPY package.json package.json 
RUN npm install
COPY tsconfig.build.json tsconfig.build.json
RUN npm run build
ENV AUTH_SERVICE_URL=host.docker.internal:3020
COPY . /usr/src/app

CMD ["npm", "run", "start:prod"]