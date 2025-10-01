import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Features } from '@/components/features/Features';
import {
    Zap,
    Calendar,
    Palette,
    Users,
    Shield,
    BarChart,
    Sparkles,
    Clock,
    Globe,
    TrendingUp,
    Lock,
    Smartphone,
} from 'lucide-react';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Features - StaudiyoKehak | AI-Powered Social Media Content Tools',
    description:
        'Discover powerful features including AI content generation, smart scheduling, multi-platform support, analytics, and more. Everything you need to dominate social media.',
    keywords: 'AI content generation, social media scheduling, analytics, multi-platform, automation',
};

const detailedFeatures = [
    {
        icon: Zap,
        title: 'AI Content Generation',
        description:
            'Leverage cutting-edge AI technology to create engaging posts, captions, and hashtags tailored to your brand voice.',
        benefits: [
            'Generate unlimited content variations',
            'Maintain consistent brand voice',
            'Support for multiple languages',
            'Customizable tone and style',
            'Automatic hashtag suggestions',
        ],
        color: 'from-orange-600 to-red-600',
    },
    {
        icon: Calendar,
        title: 'Smart Scheduling',
        description:
            'Schedule posts across multiple platforms with intelligent timing suggestions to maximize engagement and reach.',
        benefits: [
            'AI-powered optimal posting times',
            'Bulk scheduling for efficiency',
            'Queue management system',
            'Timezone optimization',
            'Recurring post schedules',
        ],
        color: 'from-blue-600 to-cyan-600',
    },
    {
        icon: Palette,
        title: 'Template System',
        description:
            'Save and reuse your favorite AI prompt configurations for consistent, high-quality content creation.',
        benefits: [
            'Pre-built templates library',
            'Create custom templates',
            'Share templates with team',
            'Version control for templates',
            'Industry-specific templates',
        ],
        color: 'from-purple-600 to-pink-600',
    },
    {
        icon: Users,
        title: 'Multi-Platform Support',
        description:
            'Manage Instagram, Twitter, LinkedIn, Facebook, and more from a single, unified dashboard.',
        benefits: [
            'Connect unlimited accounts',
            'Platform-specific optimization',
            'Cross-posting capabilities',
            'Unified content calendar',
            'Platform analytics in one place',
        ],
        color: 'from-green-600 to-teal-600',
    },
    {
        icon: Shield,
        title: 'Enterprise Security',
        description:
            'Bank-level security with Argon2 encryption, role-based access control, and compliance certifications.',
        benefits: [
            'End-to-end encryption',
            'SOC 2 Type II compliant',
            'GDPR and CCPA ready',
            'Two-factor authentication',
            'Audit logs and monitoring',
        ],
        color: 'from-gray-600 to-gray-800',
    },
    {
        icon: BarChart,
        title: 'Advanced Analytics',
        description:
            'Track performance metrics, engagement rates, and audience insights with comprehensive analytics tools.',
        benefits: [
            'Real-time performance tracking',
            'Engagement rate analysis',
            'Audience demographics',
            'Competitor benchmarking',
            'Exportable reports',
        ],
        color: 'from-indigo-600 to-purple-600',
    },
];

const additionalFeatures = [
    {
        icon: Sparkles,
        title: 'Content Optimization',
        description: 'AI-powered suggestions to improve your content performance',
    },
    {
        icon: Clock,
        title: 'Time-Saving Automation',
        description: 'Automate repetitive tasks and focus on strategy',
    },
    {
        icon: Globe,
        title: 'Global Reach',
        description: 'Multi-language support for international audiences',
    },
    {
        icon: TrendingUp,
        title: 'Growth Tools',
        description: 'Built-in tools to help you grow your audience',
    },
    {
        icon: Lock,
        title: 'Data Privacy',
        description: 'Your data is encrypted and never shared',
    },
    {
        icon: Smartphone,
        title: 'Mobile Optimized',
        description: 'Manage your content on the go with our mobile app',
    },
];

export default function FeaturesPage() {
    return (
        <>
            <Header />
            <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
                {/* Hero Section */}
                <section className="pt-20 pb-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
                    <div className="container mx-auto text-center max-w-4xl">
                        <h1 className="text-5xl md:text-6xl font-bold mb-6">
                            Powerful Features for Modern Content Creators
                        </h1>
                        <p className="text-xl md:text-2xl text-purple-100 mb-8">
                            Everything you need to create, schedule, and optimize your social media presence
                            in one comprehensive platform.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                href="/auth/signup"
                                className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:shadow-xl transition-all duration-200"
                            >
                                Start Free Trial
                            </Link>
                            <Link
                                href="/pricing"
                                className="bg-purple-700 text-white px-8 py-4 rounded-lg font-semibold hover:bg-purple-800 transition-all duration-200 border-2 border-white"
                            >
                                View Pricing
                            </Link>
                        </div>
                    </div>
                </section>

                {/* Main Features Grid */}
                <section className="py-20">
                    <Features />
                </section>

                {/* Detailed Features */}
                <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
                    <div className="container mx-auto max-w-6xl">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                                Dive Deeper Into Our Features
                            </h2>
                            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                                Each feature is designed with your success in mind, providing powerful tools
                                that are easy to use yet sophisticated enough for professionals.
                            </p>
                        </div>

                        <div className="space-y-20">
                            {detailedFeatures.map((feature, index) => {
                                const Icon = feature.icon;
                                const isEven = index % 2 === 0;

                                return (
                                    <article
                                        key={index}
                                        className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'
                                            } gap-12 items-center`}
                                    >
                                        {/* Icon and Title */}
                                        <div className="flex-1">
                                            <div
                                                className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center mb-6`}
                                            >
                                                <Icon className="w-8 h-8 text-white" aria-hidden="true" />
                                            </div>
                                            <h3 className="text-3xl font-bold text-gray-900 mb-4">
                                                {feature.title}
                                            </h3>
                                            <p className="text-lg text-gray-600 mb-6">{feature.description}</p>
                                            <ul className="space-y-3">
                                                {feature.benefits.map((benefit, benefitIndex) => (
                                                    <li key={benefitIndex} className="flex items-start">
                                                        <svg
                                                            className="w-6 h-6 text-green-600 mr-3 flex-shrink-0 mt-0.5"
                                                            fill="none"
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            strokeWidth="2"
                                                            viewBox="0 0 24 24"
                                                            stroke="currentColor"
                                                            aria-hidden="true"
                                                        >
                                                            <path d="M5 13l4 4L19 7" />
                                                        </svg>
                                                        <span className="text-gray-700">{benefit}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        {/* Visual Placeholder */}
                                        <div className="flex-1">
                                            <div
                                                className={`bg-gradient-to-br ${feature.color} rounded-2xl p-12 h-80 flex items-center justify-center shadow-xl`}
                                            >
                                                <Icon className="w-32 h-32 text-white opacity-20" aria-hidden="true" />
                                            </div>
                                        </div>
                                    </article>
                                );
                            })}
                        </div>
                    </div>
                </section>

                {/* Additional Features Grid */}
                <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
                    <div className="container mx-auto max-w-6xl">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                                And There&apos;s More...
                            </h2>
                            <p className="text-xl text-gray-600">
                                We&apos;re constantly adding new features to help you succeed
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {additionalFeatures.map((feature, index) => {
                                const Icon = feature.icon;
                                return (
                                    <div
                                        key={index}
                                        className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-shadow"
                                    >
                                        <Icon
                                            className="w-12 h-12 text-purple-600 mb-4"
                                            aria-hidden="true"
                                        />
                                        <h3 className="text-xl font-semibold text-gray-900 mb-2">
                                            {feature.title}
                                        </h3>
                                        <p className="text-gray-600">{feature.description}</p>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </section>

                {/* Integration Section */}
                <section className="py-20 px-4 sm:px-6 lg:px-8">
                    <div className="container mx-auto max-w-6xl">
                        <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-3xl p-12 text-white text-center">
                            <h2 className="text-4xl md:text-5xl font-bold mb-6">
                                Integrates With Your Favorite Platforms
                            </h2>
                            <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto">
                                Connect with Instagram, Twitter, LinkedIn, Facebook, TikTok, and more. Manage
                                all your social media from one powerful dashboard.
                            </p>
                            <div className="flex flex-wrap justify-center gap-6 mb-8">
                                {['Instagram', 'Twitter', 'LinkedIn', 'Facebook', 'TikTok', 'YouTube'].map(
                                    (platform) => (
                                        <div
                                            key={platform}
                                            className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-lg font-semibold"
                                        >
                                            {platform}
                                        </div>
                                    )
                                )}
                            </div>
                            <Link
                                href="/auth/signup"
                                className="inline-block bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:shadow-xl transition-all duration-200"
                            >
                                Connect Your Accounts
                            </Link>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
                    <div className="container mx-auto max-w-4xl text-center">
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                            Ready to Transform Your Social Media?
                        </h2>
                        <p className="text-xl text-gray-600 mb-8">
                            Join thousands of content creators who are already using StaudiyoKehak to grow
                            their online presence.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                href="/auth/signup"
                                className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-xl transition-all duration-200"
                            >
                                Start Free Trial
                            </Link>
                            <Link
                                href="/contact"
                                className="bg-gray-900 text-white px-8 py-4 rounded-lg font-semibold hover:bg-gray-800 transition-all duration-200"
                            >
                                Contact Sales
                            </Link>
                        </div>
                        <p className="text-gray-500 mt-6">
                            14-day free trial • No credit card required • Cancel anytime
                        </p>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
