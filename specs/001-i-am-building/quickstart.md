# Quickstart: Build Responsive Modern Website for StaudiyoKehak

## Prerequisites

- Node.js 22+ (LTS)
- MongoDB Atlas account or local MongoDB instance
- VS Code with recommended extensions

## Installation

1. Clone the repository and checkout the feature branch:

   ```bash
   git checkout 001-i-am-building
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Set up environment variables:
   Create `.env.local` with:

   ```
   DATABASE_URL="mongodb://localhost:27017/staudiyokehak"
   NEXTAUTH_SECRET="your-secret-key"
   NEXTAUTH_URL="http://localhost:3000"
   ```

4. Set up the database:
   ```bash
   npx prisma generate
   npx prisma db push
   ```

## Running the Application

1. Start the development server:

   ```bash
   npm run dev
   ```

2. Open http://localhost:3000 in your browser

## Building for Production

1. Build the application:

   ```bash
   npm run build
   ```

2. Start the production server:
   ```bash
   npm start
   ```

## Testing

- Run unit tests: `npm run test:unit`
- Run component tests: `npm run test:component`
- Run E2E tests: `npm run test:e2e`

## Features Overview

- Landing page with hero, features, and CTA
- Documentation sections (setup, architecture, etc.)
- Authentication placeholders
- Responsive design for all devices
