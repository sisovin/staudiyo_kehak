# 📘 StaudiyoKehak Project Documentation  
**AI-powered social media content generator & scheduler**  
_Design inspired by Mr. Chieng Sisovin_

Here's a comprehensive full-stack project documentation for **StaudiyoKehak**, tailored to your tech stack and onboarding-first mindset. This guide is structured for clarity, accessibility, and rapid team adoption, with annotated sections that connect each layer to user experience and business impact.

---

## 🧰 Tech Stack Overview

| Layer              | Technology Used                                                                 |
|--------------------|----------------------------------------------------------------------------------|
| Frontend           | Next.js 15.5 (App Router), React 19.1, shadcn/ui, Tailwind CSS v4.1              |
| State Management   | Tanstack Query v5                                                                |
| Backend            | Node.js 22+ (LTS), Next.js API routes                                            |
| Authentication     | Argon2 for password hashing                                                      |
| Database           | Prisma ORM v6 with MongoDB                                                       |
| AI Integration     | Placeholder endpoints for future AI workflows                                    |
| Deployment         | Vercel (recommended), Docker-compatible                                          |
| Testing            | Playwright (E2E), Vitest (unit), React Testing Library (component)              |

---

## ⚙️ 1. Project Setup

### Prerequisites
- Node.js ≥ 22 (LTS)
- MongoDB Atlas or local MongoDB instance
- VS Code with Prisma, Tailwind, and shadcn/ui extensions

### Installation Steps
1. **Initialize project**
   ```bash
   npx create-next-app@latest staudiyokehak --app --typescript
   cd staudiyokehak
   ```

2. **Install dependencies**
   - Tailwind CSS v4.1
   - shadcn/ui
   - Prisma v6
   - Tanstack Query v5
   - Argon2
   - MongoDB driver

3. **Configure Tailwind**
   - Match ViralWaveStudio’s color palette, typography, and spacing
   - Use custom theme extensions for brand consistency

4. **Set up shadcn/ui**
   - Scaffold components: Button, Card, Calendar, Modal, Tabs
   - Customize with Tailwind to match ViralWaveStudio’s interactive elements

---

## 🏗️ 2. Architecture Overview

### App Structure (Next.js App Router)
```
/app
  /auth
  /dashboard
  /generate
  /schedule
  /settings
/lib
/components
/prisma
/styles
/utils
```

### Key Architectural Decisions
- **Server Actions**: Used for form submissions, content generation triggers, and scheduling workflows
- **Suspense**: Enables smooth loading states for AI responses and calendar data
- **Tanstack Query**: Centralized data fetching with caching and optimistic updates
- **Prisma**: Type-safe DB access with MongoDB schema modeling

---

## 🗃️ 3. Database Schema (Prisma + MongoDB)

### Core Models
- `User`: Auth, preferences, AI settings
- `Post`: Generated content, status (draft/scheduled/published)
- `Schedule`: Calendar entries with platform, time, recurrence
- `Template`: Saved AI prompt configurations
- `AuditLog`: Tracks generation and scheduling actions

### Example Relationships
- One `User` → Many `Posts`
- One `Post` → One `Schedule`
- One `User` → Many `Templates`

---

## 🔐 4. Authentication

### Flow
- Signup/Login via email + password
- Passwords hashed with **Argon2**
- Session management via secure cookies or JWT (configurable)

### Features
- Rate limiting on login
- Forgot password flow (placeholder)
- Role-based access (admin, user)

---

## 🤖 5. AI Integration Placeholders

### Future Integration Points
- `/generate`: Server action to trigger AI content generation
- `/settings/ai`: Customize tone, length, platform (e.g., Instagram, LinkedIn)
- `/template`: Save and reuse prompt configurations

### Suggested AI Capabilities
- Text generation (posts, captions, hashtags)
- Image generation (thumbnails, banners)
- Auto-scheduling based on engagement predictions

> 🧠 Tip: Use server actions with Suspense to stream AI responses for better UX.

---

## 📆 6. Scheduling Calendar

### Features
- Drag-and-drop calendar (shadcn/ui + Tailwind)
- Platform-specific scheduling (e.g., Instagram, Twitter)
- Recurring post support
- Conflict detection and resolution

### UX Notes
- Match ViralWaveStudio’s layout and interactivity
- Use color-coded tags for platform and status

---

## 🚀 7. Deployment

### Recommended: Vercel
- SSR optimized
- Environment variables via dashboard
- GitHub integration for CI/CD

### Alternative: Docker
- Containerize for custom hosting
- Use multi-stage builds for performance

---

## 🧪 8. Testing Strategy

| Layer         | Tool                     | Purpose                          |
|---------------|--------------------------|----------------------------------|
| Unit Tests    | Vitest                   | Logic and utility functions      |
| Component     | React Testing Library    | UI behavior and props            |
| E2E           | Playwright               | Full user flows (auth, generate) |

### Suggested Test Cases
- Signup/login flow
- AI generation trigger
- Calendar scheduling
- Template save/load
- Role-based access

---

## 🧭 Final Notes for Onboarding

- Every component should be annotated with its **user impact**, **business purpose**, and **technical role**
- Use **color-coded folder-to-feature maps** for cross-team clarity
- Maintain a **living style guide** for UI consistency
- Document AI prompt strategies and scheduling heuristics as they evolve

---

## Template

   Here’s the corrected, standalone-compatible version:

```tsx
import { ArrowRight, Calendar, Zap, Palette, Users, Shield } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Navigation */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-sm border-b border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                StaudiyoKehak
              </span>
            </div>
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-gray-600 hover:text-purple-600 transition-colors">
                Features
              </a>
              <a href="#pricing" className="text-gray-600 hover:text-purple-600 transition-colors">
                Pricing
              </a>
              <a href="#docs" className="text-gray-600 hover:text-purple-600 transition-colors">
                Documentation
              </a>
            </nav>
            <div className="flex items-center space-x-4">
              <a 
                href="#login" 
                className="text-gray-600 hover:text-purple-600 transition-colors font-medium"
              >
                Sign in
              </a>
              <a 
                href="#signup"
                className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:shadow-lg transition-all duration-200"
              >
                Get Started
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 bg-purple-50 rounded-full mb-8">
              <Zap className="w-4 h-4 text-purple-600 mr-2" />
              <span className="text-purple-700 font-medium">AI-powered social media content generator</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Create, Schedule, and
              <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent"> 
                {' '}Dominate Social Media
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
              Generate engaging social media content with AI, schedule posts across platforms, and grow your audience—all from one intuitive dashboard.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="#signup"
                className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center"
              >
                Start Creating Free
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
              <a 
                href="#demo"
                className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg font-semibold text-lg hover:border-purple-600 hover:text-purple-600 transition-colors"
              >
                Watch Demo
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Everything You Need to Succeed
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Built with creators in mind, StaudiyoKehak combines powerful AI with intuitive scheduling tools.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* AI Content Generation */}
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center mb-6">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">AI Content Generation</h3>
              <p className="text-gray-600">
                Generate captivating posts, captions, and hashtags tailored to your brand voice and target platforms.
              </p>
            </div>

            {/* Smart Scheduling */}
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-gradient-to-r from-green-600 to-teal-600 rounded-lg flex items-center justify-center mb-6">
                <Calendar className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Smart Scheduling</h3>
              <p className="text-gray-600">
                Drag-and-drop calendar with platform-specific optimization and recurring post support.
              </p>
            </div>

            {/* Template System */}
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-gradient-to-r from-orange-600 to-red-600 rounded-lg flex items-center justify-center mb-6">
                <Palette className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Template System</h3>
              <p className="text-gray-600">
                Save and reuse your best-performing AI prompt configurations for consistent brand messaging.
              </p>
            </div>

            {/* Multi-Platform */}
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg flex items-center justify-center mb-6">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Multi-Platform Support</h3>
              <p className="text-gray-600">
                Schedule content across Instagram, Twitter, LinkedIn, and more from a single dashboard.
              </p>
            </div>

            {/* Security */}
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-gradient-to-r from-gray-600 to-gray-800 rounded-lg flex items-center justify-center mb-6">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Enterprise Security</h3>
              <p className="text-gray-600">
                Argon2 password hashing and secure session management keep your data protected.
              </p>
            </div>

            {/* Analytics Ready */}
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg flex items-center justify-center mb-6">
                <div className="w-3 h-3 bg-white rounded-full"></div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Analytics Ready</h3>
              <p className="text-gray-600">
                Track performance and optimize your content strategy with built-in analytics integration.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Social Media Strategy?
            </h2>
            <p className="text-purple-100 text-xl mb-8">
              Join thousands of creators who are already using StaudiyoKehak to grow their audience and engagement.
            </p>
            <a 
              href="#signup"
              className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-xl transition-all duration-200 inline-flex items-center"
            >
              Create Your Free Account
              <ArrowRight className="w-5 h-5 ml-2" />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
                  <Zap className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold">StaudiyoKehak</span>
              </div>
              <p className="text-gray-400">
                AI-powered social media content generator & scheduler designed for creators.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Product</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#features" className="hover:text-white transition-colors">Features</a></li>
                <li><a href="#pricing" className="hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#roadmap" className="hover:text-white transition-colors">Roadmap</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Resources</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#docs" className="hover:text-white transition-colors">Documentation</a></li>
                <li><a href="#blog" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#support" className="hover:text-white transition-colors">Support</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#about" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
                <li><a href="#privacy" className="hover:text-white transition-colors">Privacy</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 StaudiyoKehak. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
```
---