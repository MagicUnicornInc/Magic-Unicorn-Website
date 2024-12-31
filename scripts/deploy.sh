#!/bin/bash

# Colors for output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Print with color
print_status() {
    echo -e "${BLUE}[STATUS]${NC} $1"
}

print_success() {
    echo -e "${GREEN}[SUCCESS]${NC} $1"
}

# Check if docker is running
if ! docker info > /dev/null 2>&1; then
    echo "Docker is not running. Please start Docker first."
    exit 1
fi

# Start deployment
print_status "Starting deployment..."

# Pull latest changes if in git repository
if [ -d .git ]; then
    print_status "Pulling latest changes..."
    git pull
fi

# Create docker directory if it doesn't exist
mkdir -p docker

# Build and start containers
print_status "Building and starting containers..."
docker-compose up --build -d

# Check if containers are running
if [ $? -eq 0 ]; then
    print_success "Deployment successful! Site is running on http://localhost:3000"
    print_status "Container status:"
    docker-compose ps
else
    echo "Deployment failed. Check the logs with: docker-compose logs"
    exit 1
fi
