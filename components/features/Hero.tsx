import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export function Hero() {
    return (
        <section className="py-20 md:py-32" aria-label="Hero section">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto text-center">
                    {/* Badge */}
                    <div className="inline-block mb-6">
                        <span className="bg-gradient-to-r from-purple-100 to-blue-100 text-purple-700 px-4 py-2 rounded-full text-sm font-semibold" role="status">
                            ✨ AI-Powered Content Generation
                        </span>
                    </div>

                    {/* Main Title */}
                    <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                        Create, Schedule, and Dominate Social Media
                    </h1>

                    {/* Description */}
                    <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                        Transform your social media presence with AI-powered content generation and intelligent
                        scheduling. Save time, increase engagement, and grow your audience effortlessly.
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/auth/signup"
                            className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-xl transition-all duration-200 inline-flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
                            aria-label="Sign up for free"
                        >
                            Get Started Free
                            <ArrowRight className="w-5 h-5 ml-2" aria-hidden="true" />
                        </Link>
                        <Link
                            href="#features"
                            className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg font-semibold text-lg hover:border-gray-400 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2"
                            aria-label="Learn more about features"
                        >
                            Learn More
                        </Link>
                    </div>

                    {/* Stats or Social Proof */}
                    <div className="mt-12 flex flex-wrap justify-center gap-8 text-center" role="region" aria-label="Statistics">
                        <div>
                            <div className="text-3xl font-bold text-gray-900" aria-label="10,000 plus active users">10K+</div>
                            <div className="text-gray-600">Active Users</div>
                        </div>
                        <div>
                            <div className="text-3xl font-bold text-gray-900" aria-label="1 million plus posts generated">1M+</div>
                            <div className="text-gray-600">Posts Generated</div>
                        </div>
                        <div>
                            <div className="text-3xl font-bold text-gray-900" aria-label="95 percent satisfaction rate">95%</div>
                            <div className="text-gray-600">Satisfaction Rate</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
