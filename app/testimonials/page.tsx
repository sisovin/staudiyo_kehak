import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Testimonials } from '@/components/features/Testimonials';
import { Star, Quote, TrendingUp, Users, Award, Heart } from 'lucide-react';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Testimonials - StaudiyoKehak | Customer Reviews & Success Stories',
    description:
        'Read real reviews from 50,000+ creators and marketers who trust StaudiyoKehak. See how our AI-powered platform helps users grow their social media presence.',
    keywords: 'testimonials, reviews, customer feedback, success stories, user reviews, social proof',
};

const caseStudies = [
    {
        company: 'TechCorp Inc.',
        industry: 'Technology',
        logo: 'TC',
        challenge: 'Managing social media for multiple product launches simultaneously',
        solution: 'Used AI content generation and smart scheduling for coordinated campaigns',
        results: [
            '300% increase in engagement',
            '5x faster content creation',
            '40% reduction in marketing costs',
        ],
        color: 'from-blue-600 to-cyan-600',
    },
    {
        company: 'StyleHub',
        industry: 'Fashion E-commerce',
        logo: 'SH',
        challenge: 'Maintaining consistent brand voice across 8 social platforms',
        solution: 'Leveraged template system and multi-platform scheduling',
        results: [
            '250% follower growth in 6 months',
            'Consistent posting 7 days/week',
            '85% time saved on content planning',
        ],
        color: 'from-purple-600 to-pink-600',
    },
    {
        company: 'Brand Boost Agency',
        industry: 'Marketing Agency',
        logo: 'BB',
        challenge: 'Scaling operations to handle 50+ client accounts',
        solution: 'Implemented enterprise features with team collaboration',
        results: [
            '10x client capacity',
            '45% improvement in engagement rates',
            '98% client retention rate',
        ],
        color: 'from-green-600 to-teal-600',
    },
];

const trustIndicators = [
    {
        icon: Users,
        stat: '50,000+',
        label: 'Active Users',
        description: 'Creators and businesses trust us',
    },
    {
        icon: Star,
        stat: '4.9/5',
        label: 'Average Rating',
        description: 'From 2,000+ verified reviews',
    },
    {
        icon: TrendingUp,
        stat: '300%',
        label: 'Average Growth',
        description: 'User engagement increase',
    },
    {
        icon: Award,
        stat: '98%',
        label: 'Satisfaction Rate',
        description: 'Would recommend to others',
    },
];

export default function TestimonialsPage() {
    return (
        <>
            <Header />
            <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
                {/* Hero Section */}
                <section className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-20 px-4 sm:px-6 lg:px-8">
                    <div className="container mx-auto max-w-4xl text-center">
                        <div className="flex justify-center mb-4">
                            {[...Array(5)].map((_, i) => (
                                <Star
                                    key={i}
                                    className="w-8 h-8 text-yellow-400 fill-yellow-400"
                                    aria-hidden="true"
                                />
                            ))}
                        </div>
                        <h1 className="text-5xl md:text-6xl font-bold mb-6">
                            Loved by Thousands of Creators
                        </h1>
                        <p className="text-xl md:text-2xl text-purple-100 mb-8">
                            Join 50,000+ satisfied users who have transformed their social media presence with
                            StaudiyoKehak
                        </p>
                        <div className="inline-flex items-center bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full">
                            <Heart className="w-5 h-5 mr-2 text-red-400" />
                            <span className="font-semibold">Trusted by creators in 150+ countries</span>
                        </div>
                    </div>
                </section>

                {/* Trust Indicators */}
                <section className="py-20 px-4 sm:px-6 lg:px-8 -mt-10">
                    <div className="container mx-auto max-w-6xl">
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {trustIndicators.map((indicator, index) => {
                                const Icon = indicator.icon;
                                return (
                                    <div
                                        key={index}
                                        className="bg-white rounded-xl p-6 shadow-lg text-center transform hover:scale-105 transition-all duration-300"
                                    >
                                        <div className="w-14 h-14 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                            <Icon className="w-7 h-7 text-white" aria-hidden="true" />
                                        </div>
                                        <div className="text-4xl font-bold text-gray-900 mb-2">
                                            {indicator.stat}
                                        </div>
                                        <div className="text-lg font-semibold text-gray-900 mb-1">
                                            {indicator.label}
                                        </div>
                                        <div className="text-sm text-gray-600">{indicator.description}</div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </section>

                {/* Main Testimonials Section */}
                <Testimonials />

                {/* Case Studies */}
                <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
                    <div className="container mx-auto max-w-6xl">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                                Success Stories
                            </h2>
                            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                                See how businesses like yours have achieved remarkable results with
                                StaudiyoKehak
                            </p>
                        </div>

                        <div className="space-y-8">
                            {caseStudies.map((study, index) => (
                                <article
                                    key={index}
                                    className="bg-white rounded-2xl p-8 md:p-12 shadow-sm hover:shadow-lg transition-all duration-300"
                                >
                                    <div className="flex flex-col md:flex-row gap-8">
                                        {/* Company Info */}
                                        <div className="md:w-1/3">
                                            <div
                                                className={`w-20 h-20 bg-gradient-to-r ${study.color} rounded-2xl flex items-center justify-center text-white font-bold text-2xl mb-4`}
                                            >
                                                {study.logo}
                                            </div>
                                            <h3 className="text-2xl font-bold text-gray-900 mb-2">
                                                {study.company}
                                            </h3>
                                            <p className="text-gray-600 mb-4">{study.industry}</p>
                                            <Quote className="w-8 h-8 text-gray-300" aria-hidden="true" />
                                        </div>

                                        {/* Challenge & Solution */}
                                        <div className="md:w-2/3 space-y-6">
                                            <div>
                                                <h4 className="text-lg font-bold text-gray-900 mb-2">
                                                    The Challenge
                                                </h4>
                                                <p className="text-gray-700">{study.challenge}</p>
                                            </div>

                                            <div>
                                                <h4 className="text-lg font-bold text-gray-900 mb-2">
                                                    The Solution
                                                </h4>
                                                <p className="text-gray-700">{study.solution}</p>
                                            </div>

                                            <div>
                                                <h4 className="text-lg font-bold text-gray-900 mb-3">
                                                    The Results
                                                </h4>
                                                <ul className="space-y-2">
                                                    {study.results.map((result, resultIndex) => (
                                                        <li
                                                            key={resultIndex}
                                                            className="flex items-center text-gray-700"
                                                        >
                                                            <TrendingUp className="w-5 h-5 text-green-600 mr-3 flex-shrink-0" />
                                                            {result}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Video Testimonials Section */}
                <section className="py-20 px-4 sm:px-6 lg:px-8">
                    <div className="container mx-auto max-w-6xl">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                                Watch Customer Stories
                            </h2>
                            <p className="text-xl text-gray-600">
                                Hear directly from users who transformed their social media game
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8">
                            {[1, 2].map((video) => (
                                <div
                                    key={video}
                                    className="bg-gray-200 rounded-2xl aspect-video flex items-center justify-center group cursor-pointer hover:bg-gray-300 transition-colors"
                                >
                                    <div className="text-center">
                                        <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                                            <div className="w-0 h-0 border-l-[12px] border-l-purple-600 border-t-[8px] border-t-transparent border-b-[8px] border-b-transparent ml-1" />
                                        </div>
                                        <p className="text-gray-700 font-semibold">
                                            Video Testimonial {video}
                                        </p>
                                        <p className="text-sm text-gray-600">Click to play</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Industry Recognition */}
                <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
                    <div className="container mx-auto max-w-6xl">
                        <div className="text-center mb-12">
                            <h2 className="text-4xl md:text-5xl font-bold mb-4">Industry Recognition</h2>
                            <p className="text-xl text-purple-100">
                                Recognized by leading publications and organizations
                            </p>
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                            {['Best AI Tool 2025', 'Top SaaS Product', 'Editor\'s Choice', 'Customer Favorite'].map(
                                (award, index) => (
                                    <div
                                        key={index}
                                        className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center"
                                    >
                                        <Award className="w-12 h-12 mx-auto mb-3 text-yellow-400" />
                                        <p className="font-semibold">{award}</p>
                                    </div>
                                )
                            )}
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-20 px-4 sm:px-6 lg:px-8">
                    <div className="container mx-auto max-w-4xl text-center">
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                            Ready to Join Them?
                        </h2>
                        <p className="text-xl text-gray-600 mb-8">
                            Start your journey to social media success today. Join thousands of satisfied users.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                href="/auth/signup"
                                className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-xl transition-all duration-200 inline-flex items-center justify-center"
                            >
                                Start Free Trial
                            </Link>
                            <Link
                                href="/contact"
                                className="bg-gray-900 text-white px-8 py-4 rounded-lg font-semibold hover:bg-gray-800 transition-all duration-200 inline-flex items-center justify-center"
                            >
                                Talk to Sales
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
