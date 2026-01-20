FROM node:18

WORKDIR /app


COPY package.json .

RUN npm install

copy . .

EXPOSE 3001

CMD ["node","index.js"]

