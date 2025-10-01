# StaudiyoKehak

AI-powered social media content generator and scheduler designed for creators.

## Overview

StaudiyoKehak is an AI-powered social media content generator and scheduler that helps content creators streamline their social media workflow. This repository hosts the landing page and documentation for the platform.

## Tech Stack

- **Next.js 15.5** (App Router)
- **React 19.1**
- **shadcn/ui + Tailwind CSS v4.1**
- **TanStack Query v5**
- **Prisma v6 + MongoDB**
- **Argon2** for password hashing
- **Node.js 22+**

## Features

- AI-powered content generation
- Social media post scheduling
- Multi-platform support
- Secure authentication with Argon2
- Modern, responsive UI built with shadcn/ui and Tailwind CSS
- Efficient data fetching with TanStack Query
- Scalable database with Prisma and MongoDB

## Getting Started

### Prerequisites

- Node.js 22 or higher
- MongoDB instance
- npm or yarn package manager

### Installation

```bash
# Clone the repository
git clone https://github.com/sisovin/staudiyo_kehak.git

# Navigate to the project directory
cd staudiyo_kehak

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env
# Edit .env with your configuration

# Run database migrations
npx prisma generate
npx prisma db push

# Start the development server
npm run dev
```

### Environment Variables

Create a `.env` file in the root directory with the following variables:

```env
DATABASE_URL="your_mongodb_connection_string"
NEXTAUTH_SECRET="your_nextauth_secret"
NEXTAUTH_URL="http://localhost:3000"
```

## Development

### Running the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

### Building for Production

```bash
npm run build
npm start
```

### Code Quality

```bash
# Run linting
npm run lint

# Run type checking
npm run type-check
```

## Project Structure

```
staudiyo_kehak/
├── app/              # Next.js 15 App Router pages
├── components/       # React components (shadcn/ui)
├── lib/              # Utility functions and configurations
├── prisma/           # Database schema and migrations
├── public/           # Static assets
└── styles/           # Global styles and Tailwind config
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License.

## Contact

For questions or support, please open an issue on GitHub.
