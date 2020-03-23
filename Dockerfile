FROM node:10.16
WORKDIR /usr/src/app
COPY package.json package.json 
RUN npm install
COPY tsconfig.build.json tsconfig.build.json
ENV AUTH_SERVICE_URL=100.96.1.23
COPY . .
RUN npm run build

CMD ["node", "dist/main.js"]