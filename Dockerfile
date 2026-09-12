FROM node:20-bookworm
WORKDIR /app
COPY package*.json ./
RUN npm install --legacy-peer-deps
COPY . .
CMD ["node", "index.js"]
