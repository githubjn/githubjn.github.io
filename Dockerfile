# FROM node:lts
FROM node:16.14.2

# Install global npm packages
RUN npm i -g @angular/cli

# Set working directory     /usr/src/app
WORKDIR /angapp

# Copy and install local npm packages
COPY package.json* package-lock.json* ./
RUN npm install

# Copy the remaining source code
COPY . .
