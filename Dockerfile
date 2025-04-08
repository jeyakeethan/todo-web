# Build Stage
FROM node:22.14 AS build
WORKDIR /app

COPY package.json package-lock.json ./
RUN npm install

COPY . ./
RUN npm run build

# Serve using Nginx
FROM nginx:alpine
COPY --from=build /app/build /usr/share/nginx/html

# Expose default Nginx port
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
