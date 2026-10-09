FROM node:18 AS builder

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .


FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/index.js ./

EXPOSE 3001

CMD ["node", "index.js"]
