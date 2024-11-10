# Use a Node.js base image
FROM node:20-slim

# Set the working directory in the container
WORKDIR /app

RUN addgroup --system turkey-timer && adduser --system --ingroup turkey-timer turkey-timer

# Install curl
RUN apt-get update && apt-get install -y curl && rm -rf /var/lib/apt/lists/*

# Install net-tools
RUN apt-get update && apt-get install -y curl net-tools && rm -rf /var/lib/apt/lists/*


COPY dist/apps/turkey-timer-24 turkey-timer-24

RUN ls -la

RUN chown -R turkey-timer:turkey-timer .

# Expose the port your app listens on
EXPOSE 3000

RUN npm --prefix turkey-timer-24 --omit=dev -f install

# Start the application
CMD ["node", "turkey-timer-24"] 