#!/bin/bash

# Stop and remove existing container
docker stop magic-unicorn || true
docker rm magic-unicorn || true

# Pull latest changes
git pull

# Build new image
docker build -t magic-unicorn-tech .

# Run new container
docker run -d -p 3000:80 --name magic-unicorn magic-unicorn-tech

echo "Deployment complete! Site is running on port 3000"
