import { Zap, Calendar, Palette, Users, Shield, BarChart } from 'lucide-react';

const features = [
    {
        icon: Zap,
        title: 'AI Content Generation',
        description:
            'Generate engaging posts, captions, and hashtags with advanced AI technology tailored to your brand voice.',
        gradient: 'from-orange-600 to-red-600',
    },
    {
        icon: Calendar,
        title: 'Smart Scheduling',
        description:
            'Schedule posts across multiple platforms with intelligent timing suggestions to maximize engagement.',
        gradient: 'from-blue-600 to-cyan-600',
    },
    {
        icon: Palette,
        title: 'Template System',
        description:
            'Save and reuse your favorite AI prompt configurations for consistent content creation.',
        gradient: 'from-purple-600 to-pink-600',
    },
    {
        icon: Users,
        title: 'Multi-Platform Support',
        description:
            'Manage Instagram, Twitter, LinkedIn, and more from a single, unified dashboard.',
        gradient: 'from-green-600 to-teal-600',
    },
    {
        icon: Shield,
        title: 'Security First',
        description:
            'Enterprise-grade security with Argon2 encryption and role-based access control.',
        gradient: 'from-gray-600 to-gray-800',
    },
    {
        icon: BarChart,
        title: 'Analytics Ready',
        description:
            'Track performance and optimize your content strategy with built-in analytics integration.',
        gradient: 'from-indigo-600 to-purple-600',
    },
];

export function Features() {
    return (
        <section id="features" className="py-20 bg-gray-50" aria-labelledby="features-heading">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 id="features-heading" className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                        Everything You Need to Succeed
                    </h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Powerful features designed to help you create, schedule, and manage your social media
                        content effortlessly.
                    </p>
                </div>

                {/* Features Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" role="list">
                    {features.map((feature, index) => {
                        const Icon = feature.icon;
                        return (
                            <article
                                key={index}
                                className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow"
                                role="listitem"
                            >
                                <div
                                    className={`w-12 h-12 bg-gradient-to-r ${feature.gradient} rounded-lg flex items-center justify-center mb-6`}
                                    aria-hidden="true"
                                >
                                    <Icon className="w-6 h-6 text-white" />
                                </div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                                <p className="text-gray-600">{feature.description}</p>
                            </article>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
