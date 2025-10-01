# StaudiyoKehak

AI-powered social media content generator and scheduler designed for creators.

## 🚀 Features

- **AI Content Generation**: Generate engaging posts, captions, and hashtags with advanced AI technology
- **Smart Scheduling**: Schedule posts across multiple platforms with intelligent timing suggestions
- **Template System**: Save and reuse your favorite AI prompt configurations
- **Multi-Platform Support**: Manage Instagram, Twitter, LinkedIn, and more from one dashboard
- **Security First**: Enterprise-grade security with Argon2 encryption and RBAC
- **Analytics Ready**: Track performance and optimize your content strategy

## 🛠️ Tech Stack

- **Frontend**: Next.js 15.5, React 19.1, Tailwind CSS v4
- **UI Components**: shadcn/ui with Lucide icons
- **State Management**: TanStack Query v5
- **Backend**: Next.js API routes, Node.js 22+
- **Database**: Prisma v6 with MongoDB
- **Authentication**: Argon2 password hashing
- **Testing**: Vitest, React Testing Library, Playwright

## 📋 Prerequisites

- Node.js 22+ (LTS)
- MongoDB Atlas account or local MongoDB instance
- VS Code (recommended)

## 🔧 Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/sisovin/staudiyo_kehak.git
   cd staudiyo_kehak
   ```

2. **Install dependencies**

```bash
npm install

```

3. **Set up environment variables**

   Create a `.env.local` file in the root directory:

   ```env
   DATABASE_URL="mongodb://localhost:27017/staudiyokehak"
   NEXTAUTH_SECRET="your-secret-key-change-in-production"
   NEXTAUTH_URL="http://localhost:3000"
   ```

4. **Initialize the database**

   ```bash
   npx prisma generate
   npx prisma db push
   ```

5. **Start the development server**

   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🧪 Testing

- **Unit tests**: `npm run test:unit`
- **Component tests**: `npm run test:component`
- **E2E tests**: `npm run test:e2e`
- **Linting**: `npm run lint`

## 📁 Project Structure

```
staudiyokehak/
├── app/                    # Next.js App Router pages
│   ├── api/               # API routes
│   ├── auth/              # Authentication pages
│   ├── docs/              # Documentation pages
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Homepage
│   └── providers.tsx      # React Query provider
├── components/            # React components
│   ├── features/          # Feature-specific components
│   ├── layout/            # Layout components
│   └── ui/                # UI components (shadcn/ui)
├── lib/                   # Utilities and configurations
│   ├── auth/              # Authentication utilities
│   ├── prisma/            # Prisma client
│   └── utils/             # Helper functions
├── prisma/                # Prisma schema
├── tests/                 # Test files
│   ├── contract/          # API contract tests
│   ├── e2e/               # End-to-end tests
│   ├── integration/       # Integration tests
│   └── unit/              # Unit tests
└── public/                # Static assets
```

## 🚢 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import the project in Vercel
3. Add environment variables
4. Deploy

### Docker

```bash
# Build the image
docker build -t staudiyokehak .

# Run the container
docker run -p 3000:3000 staudiyokehak
```

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License.

## 👥 Authors

- **Chieng Sisovin** - Design Inspiration

## 🙏 Acknowledgments

- shadcn/ui for beautiful components
- Next.js team for the amazing framework
- All contributors who help improve this project

## 📞 Support

For support, email sisovin@outlook.com or open an issue on GitHub.

---

Made with ❤️ by the [Peanech Team](https://peanech.online) 
