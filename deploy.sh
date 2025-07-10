#!/bin/bash

# Time Capsule Messenger Deployment Script
# This script helps deploy the application to production

set -e

echo "🚀 Starting Time Capsule Messenger deployment..."

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Function to print colored output
print_status() {
    echo -e "${GREEN}[INFO]${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

print_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    print_error "Node.js is not installed. Please install Node.js first."
    exit 1
fi

# Check if npm is installed
if ! command -v npm &> /dev/null; then
    print_error "npm is not installed. Please install npm first."
    exit 1
fi

print_status "Installing frontend dependencies..."
npm install

print_status "Building frontend for production..."
npm run build

print_status "Installing backend dependencies..."
cd backend
npm install

print_status "Running backend tests..."
npm test

print_status "Checking environment variables..."
if [ ! -f .env ]; then
    print_warning "No .env file found in backend directory."
    print_warning "Please create a .env file with the following variables:"
    echo "PORT=5000"
    echo "MONGODB_URI=your-mongodb-connection-string"
    echo "EMAIL_USER=your-gmail-address"
    echo "EMAIL_PASS=your-gmail-app-password"
    echo "FRONTEND_URL=your-frontend-url"
    echo "NODE_ENV=production"
fi

print_status "Deployment preparation complete!"
print_status "Next steps:"
echo "1. Set up your MongoDB database (local or Atlas)"
echo "2. Configure your Gmail account for sending emails"
echo "3. Deploy frontend to Vercel:"
echo "   - Connect your GitHub repository"
echo "   - Set build command: npm run build"
echo "   - Set output directory: build"
echo "4. Deploy backend to Render/Firebase:"
echo "   - Connect your GitHub repository"
echo "   - Set build command: npm install"
echo "   - Set start command: npm start"
echo "   - Add environment variables"
echo "5. Update frontend environment variables with your backend URL"

print_status "Deployment script completed successfully! ✨" 