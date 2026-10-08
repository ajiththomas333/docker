# Build stage
FROM node:18 AS builder

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .


# Production stage
FROM node:18-alpine

WORKDIR /app

COPY package*.json ./

COPY --from=builder /app ./

EXPOSE 3000

CMD ["npm", "start"]
