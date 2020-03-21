FROM node:10.16
WORKDIR /usr/src/app
COPY package.json /. 
RUN npm install
RUN npm install grpc
COPY tsconfig.build.json tsconfig.build.json
ENV AUTH_SERVICE_URL=host.docker.internal:3020
COPY . .
RUN ls -l
RUN npm run build
RUN node dist/main.js

# CMD ["node", "dist/main.js"]