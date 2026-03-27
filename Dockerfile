# Stage 1: Base image
FROM node:20-alpine

# Set working directory inside the container
WORKDIR /app

# Copy package files first (for better layer caching)
COPY package*.json ./

# Install only production dependencies
RUN npm ci --only=production

# Copy the rest of the application code
COPY . .

# Expose the port the app listens on
EXPOSE 3000

# Command to run when container starts
CMD ["node", "server.js"]