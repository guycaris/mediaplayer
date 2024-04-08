FROM node:19.5.0-alpine

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install app dependencies
RUN npm install


COPY public/ /app/public
COPY src/ /app/src
COPY package.json /app/

# Expose port 3000 (adjust the port based on your application)
EXPOSE 3000

# CMD to run the application
CMD [ "npm", "start" ]