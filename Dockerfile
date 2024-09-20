# Use a base image with Node.js
FROM node:alpine

# Set the working directory
WORKDIR /usr/src/app

# Copy package.json and yarn.lock to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the Nuxt.js app
RUN npm run build

# Expose the port your app will run on (assuming your Nuxt.js app runs on port 8080)
EXPOSE 8100

# Command to run your application
CMD ["node", ".output/server/index.mjs"]
