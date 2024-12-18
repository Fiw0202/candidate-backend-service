##TODO - Fix can't start container_name: candidate_service should run local to start service

FROM node:20 AS builder
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM node:20
WORKDIR /usr/src/app
COPY --from=builder /usr/src/app/dist /usr/src/app/dist
COPY --from=builder /usr/src/app/package*.json ./
RUN npm install
EXPOSE 3000
CMD ["node", "dist/server.js"]