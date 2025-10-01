import { Footer } from '@/components/layout/Footer';
import { Header } from '@/components/layout/Header';
import {
    BookOpen,
    Code,
    Database,
    Lock,
    Zap,
    Terminal,
    FileCode,
    Package,
    ArrowRight,
    CheckCircle,
} from 'lucide-react';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Documentation - StaudiyoKehak | Developer Guides & API Reference',
    description:
        'Comprehensive documentation, guides, and API reference for StaudiyoKehak. Learn how to integrate, customize, and build with our platform.',
};

const quickStartSteps = [
    {
        step: 1,
        title: 'Install Dependencies',
        description: 'Clone the repository and install all required packages',
        command: 'npm install',
    },
    {
        step: 2,
        title: 'Configure Environment',
        description: 'Set up your environment variables and database connection',
        command: 'cp .env.example .env.local',
    },
    {
        step: 3,
        title: 'Run Database Migrations',
        description: 'Initialize your database schema with Prisma',
        command: 'npx prisma migrate dev',
    },
    {
        step: 4,
        title: 'Start Development Server',
        description: 'Launch the application in development mode',
        command: 'npm run dev',
    },
];

const documentationSections = [
    {
        icon: BookOpen,
        title: 'Getting Started',
        description: 'Learn the basics and get up and running quickly',
        color: 'from-blue-600 to-cyan-600',
        links: [
            { label: 'Installation', href: '/docs/setup' },
            { label: 'Quick Start Guide', href: '/docs/quickstart' },
            { label: 'Project Structure', href: '/docs/structure' },
        ],
    },
    {
        icon: Code,
        title: 'API Reference',
        description: 'Complete API documentation with examples',
        color: 'from-purple-600 to-pink-600',
        links: [
            { label: 'Authentication', href: '/docs/api/auth' },
            { label: 'Posts Endpoint', href: '/docs/api/posts' },
            { label: 'Rate Limiting', href: '/docs/api/rate-limits' },
        ],
    },
    {
        icon: Database,
        title: 'Database & Models',
        description: 'Schema design and database operations',
        color: 'from-green-600 to-teal-600',
        links: [
            { label: 'Data Models', href: '/docs/database/models' },
            { label: 'Prisma Setup', href: '/docs/database/prisma' },
            { label: 'Migrations', href: '/docs/database/migrations' },
        ],
    },
    {
        icon: Lock,
        title: 'Security',
        description: 'Authentication, authorization, and best practices',
        color: 'from-red-600 to-orange-600',
        links: [
            { label: 'Authentication Flow', href: '/docs/security/auth' },
            { label: 'Password Hashing', href: '/docs/security/passwords' },
            { label: 'Security Best Practices', href: '/docs/security/best-practices' },
        ],
    },
    {
        icon: Zap,
        title: 'Features',
        description: 'Detailed feature documentation and usage',
        color: 'from-yellow-600 to-orange-600',
        links: [
            { label: 'AI Content Generation', href: '/docs/features/ai' },
            { label: 'Scheduling', href: '/docs/features/scheduling' },
            { label: 'Templates', href: '/docs/features/templates' },
        ],
    },
    {
        icon: Terminal,
        title: 'CLI & Tools',
        description: 'Command-line tools and utilities',
        color: 'from-gray-600 to-gray-800',
        links: [
            { label: 'Development Tools', href: '/docs/tools/dev' },
            { label: 'Testing', href: '/docs/tools/testing' },
            { label: 'Deployment', href: '/docs/tools/deployment' },
        ],
    },
];

export default function DocsPage() {
    return (
        <>
            <Header />
            <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
                {/* Hero Section */}
                <section className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-20 px-4 sm:px-6 lg:px-8">
                    <div className="container mx-auto max-w-4xl text-center">
                        <h1 className="text-5xl md:text-6xl font-bold mb-6">Documentation</h1>
                        <p className="text-xl md:text-2xl text-purple-100 mb-8">
                            Everything you need to build, integrate, and scale with StaudiyoKehak
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                href="/docs/setup"
                                className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:shadow-xl transition-all duration-200 inline-flex items-center justify-center"
                            >
                                <BookOpen className="w-5 h-5 mr-2" />
                                Get Started
                            </Link>
                            <Link
                                href="#api-reference"
                                className="bg-purple-700 text-white px-8 py-4 rounded-lg font-semibold hover:bg-purple-800 transition-all duration-200 border-2 border-white inline-flex items-center justify-center"
                            >
                                <Code className="w-5 h-5 mr-2" />
                                API Reference
                            </Link>
                        </div>
                    </div>
                </section>

                {/* Quick Start Section */}
                <section className="py-20 px-4 sm:px-6 lg:px-8">
                    <div className="container mx-auto max-w-6xl">
                        <div className="text-center mb-12">
                            <h2 className="text-4xl font-bold text-gray-900 mb-4">Quick Start</h2>
                            <p className="text-xl text-gray-600">
                                Get up and running in 4 simple steps
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {quickStartSteps.map((step) => (
                                <div
                                    key={step.step}
                                    className="bg-white rounded-xl p-6 shadow-sm border-2 border-gray-100 hover:border-purple-200 transition-all"
                                >
                                    <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-xl mb-4">
                                        {step.step}
                                    </div>
                                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                                        {step.title}
                                    </h3>
                                    <p className="text-gray-600 mb-4 text-sm">{step.description}</p>
                                    <div className="bg-gray-900 rounded-lg p-3 font-mono text-sm text-green-400 overflow-x-auto">
                                        {step.command}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Documentation Sections Grid */}
                <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
                    <div className="container mx-auto max-w-6xl">
                        <div className="text-center mb-12">
                            <h2 className="text-4xl font-bold text-gray-900 mb-4">
                                Explore the Documentation
                            </h2>
                            <p className="text-xl text-gray-600">
                                Dive deep into specific topics and learn at your own pace
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {documentationSections.map((section, index) => {
                                const Icon = section.icon;
                                return (
                                    <article
                                        key={index}
                                        className="bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-all duration-300"
                                    >
                                        <div
                                            className={`w-14 h-14 bg-gradient-to-r ${section.color} rounded-xl flex items-center justify-center mb-6`}
                                        >
                                            <Icon className="w-7 h-7 text-white" aria-hidden="true" />
                                        </div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-2">
                                            {section.title}
                                        </h3>
                                        <p className="text-gray-600 mb-6">{section.description}</p>
                                        <ul className="space-y-3">
                                            {section.links.map((link, linkIndex) => (
                                                <li key={linkIndex}>
                                                    <Link
                                                        href={link.href}
                                                        className="text-purple-600 hover:text-purple-700 font-medium inline-flex items-center group"
                                                    >
                                                        {link.label}
                                                        <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    </article>
                                );
                            })}
                        </div>
                    </div>
                </section>

                {/* Tech Stack Section */}
                <section className="py-20 px-4 sm:px-6 lg:px-8">
                    <div className="container mx-auto max-w-6xl">
                        <div className="bg-white rounded-2xl shadow-lg p-12">
                            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                                Built with Modern Technologies
                            </h2>

                            <div className="grid md:grid-cols-2 gap-12">
                                {/* Frontend */}
                                <div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                                        <FileCode className="w-6 h-6 text-purple-600 mr-2" />
                                        Frontend
                                    </h3>
                                    <ul className="space-y-3">
                                        {[
                                            'Next.js 15.5 with App Router',
                                            'React 19.1 with Server Components',
                                            'TypeScript for type safety',
                                            'Tailwind CSS v4 for styling',
                                            'TanStack Query v5 for state management',
                                            'Lucide React for icons',
                                        ].map((tech, i) => (
                                            <li key={i} className="flex items-start">
                                                <CheckCircle className="w-5 h-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                                                <span className="text-gray-700">{tech}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Backend */}
                                <div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                                        <Package className="w-6 h-6 text-blue-600 mr-2" />
                                        Backend
                                    </h3>
                                    <ul className="space-y-3">
                                        {[
                                            'Next.js API Routes',
                                            'Prisma v6 ORM with MongoDB',
                                            'Argon2 password hashing',
                                            'JWT authentication (ready)',
                                            'Rate limiting middleware',
                                            'Vitest & Playwright for testing',
                                        ].map((tech, i) => (
                                            <li key={i} className="flex items-start">
                                                <CheckCircle className="w-5 h-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                                                <span className="text-gray-700">{tech}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
                    <div className="container mx-auto max-w-4xl text-center">
                        <h2 className="text-4xl font-bold mb-6">Need Help?</h2>
                        <p className="text-xl text-purple-100 mb-8">
                            Our community and support team are here to help you succeed
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                href="/contact"
                                className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:shadow-xl transition-all duration-200"
                            >
                                Contact Support
                            </Link>
                            <Link
                                href="https://github.com/yourusername/staudiyokehak"
                                className="bg-purple-700 text-white px-8 py-4 rounded-lg font-semibold hover:bg-purple-800 transition-all duration-200 border-2 border-white"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                View on GitHub
                            </Link>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
