# Use Node.js 22.14 for building the React app
FROM node:22.14 AS build

# Set the working directory inside the container
WORKDIR /app

# Copy the package.json and package-lock.json to install dependencies
COPY package.json package-lock.json ./
RUN npm install

# Copy the rest of the source files to the container
COPY . ./

# Run the build script to create the production build
RUN npm run build

# Use Nginx to serve the React app
FROM nginx:alpine

# Copy the built React app from the build stage into the Nginx web server folder
COPY --from=build /app/build /usr/share/nginx/html

# Expose port 80 (Nginx default port)
EXPOSE 80

# Start Nginx in the foreground
CMD ["nginx", "-g", "daemon off;"]
