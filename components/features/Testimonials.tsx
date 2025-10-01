import { Star, Quote } from 'lucide-react';

const testimonials = [
    {
        name: 'Sarah Mitchell',
        role: 'Social Media Manager',
        company: 'TechCorp Inc.',
        avatar: 'SM',
        rating: 5,
        content:
            "StaudiyoKehak has completely transformed how I manage our social media presence. The AI content generation saves me hours every week, and the scheduling features are incredibly intuitive. Best investment we've made this year!",
        highlight: 'Saves me hours every week',
    },
    {
        name: 'Marcus Johnson',
        role: 'Content Creator',
        company: '@MarkusCreates',
        avatar: 'MJ',
        rating: 5,
        content:
            "As a solo creator managing 5 platforms, this tool is a game-changer. The multi-platform support and analytics have helped me grow my audience by 300% in just 3 months. Couldn't imagine working without it now!",
        highlight: 'Grew audience by 300%',
    },
    {
        name: 'Emily Chen',
        role: 'Marketing Director',
        company: 'GrowthLabs',
        avatar: 'EC',
        rating: 5,
        content:
            "The template system is brilliant! We've created branded templates that our entire team uses, ensuring consistent messaging across all our campaigns. The ROI has been incredible.",
        highlight: 'Incredible ROI',
    },
    {
        name: 'David Rodriguez',
        role: 'Digital Strategist',
        company: 'Brand Boost Agency',
        avatar: 'DR',
        rating: 5,
        content:
            "Managing multiple client accounts used to be a nightmare. StaudiyoKehak's dashboard makes it effortless. The smart scheduling has improved our engagement rates by 45%. Our clients love the results!",
        highlight: '45% better engagement',
    },
    {
        name: 'Aisha Patel',
        role: 'Entrepreneur',
        company: 'StyleHub',
        avatar: 'AP',
        rating: 5,
        content:
            "I was skeptical about AI content tools, but this one gets it right. The content feels authentic and matches my brand voice perfectly. Plus, the customer support is outstanding!",
        highlight: 'Outstanding support',
    },
    {
        name: 'James Wilson',
        role: 'Founder & CEO',
        company: 'InnovateTech',
        avatar: 'JW',
        rating: 5,
        content:
            "Security was our top concern, and StaudiyoKehak delivers. SOC 2 compliance, excellent encryption, and enterprise-grade features at a fraction of the cost of competitors. Highly recommend!",
        highlight: 'Enterprise-grade security',
    },
];

export function Testimonials() {
    return (
        <section id="testimonials" className="py-20 bg-gradient-to-b from-white to-gray-50" aria-labelledby="testimonials-heading">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center justify-center gap-2 mb-4">
                        <div className="flex">
                            {[...Array(5)].map((_, i) => (
                                <Star
                                    key={i}
                                    className="w-6 h-6 text-yellow-400 fill-yellow-400"
                                    aria-hidden="true"
                                />
                            ))}
                        </div>
                        <span className="text-gray-600 font-semibold">4.9/5 from 2,000+ reviews</span>
                    </div>
                    <h2 id="testimonials-heading" className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                        Loved by 50,000+ Creators & Marketers
                    </h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        See what our users are saying about StaudiyoKehak.
                    </p>
                </div>

                {/* Testimonials Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                    {testimonials.map((testimonial, index) => (
                        <article
                            key={index}
                            className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 relative"
                        >
                            {/* Quote Icon */}
                            <Quote
                                className="absolute top-6 right-6 w-8 h-8 text-purple-100"
                                aria-hidden="true"
                            />

                            {/* Rating */}
                            <div className="flex gap-1 mb-4" aria-label={`Rating: ${testimonial.rating} out of 5 stars`}>
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <Star
                                        key={i}
                                        className="w-5 h-5 text-yellow-400 fill-yellow-400"
                                        aria-hidden="true"
                                    />
                                ))}
                            </div>

                            {/* Highlight */}
                            <div className="inline-block bg-purple-100 text-purple-700 text-sm font-semibold px-3 py-1 rounded-full mb-4">
                                {testimonial.highlight}
                            </div>

                            {/* Content */}
                            <p className="text-gray-700 mb-6 leading-relaxed">{testimonial.content}</p>

                            {/* Author Info */}
                            <div className="flex items-center gap-4">
                                {/* Avatar */}
                                <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-blue-600 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                                    {testimonial.avatar}
                                </div>

                                {/* Name and Role */}
                                <div>
                                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                                    <div className="text-sm text-gray-600">
                                        {testimonial.role}
                                        <span className="mx-1">•</span>
                                        {testimonial.company}
                                    </div>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>

                {/* Stats Section */}
                <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
                    <div className="text-center">
                        <div className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">50K+</div>
                        <div className="text-gray-600">Active Users</div>
                    </div>
                    <div className="text-center">
                        <div className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">10M+</div>
                        <div className="text-gray-600">Posts Generated</div>
                    </div>
                    <div className="text-center">
                        <div className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">4.9/5</div>
                        <div className="text-gray-600">User Rating</div>
                    </div>
                    <div className="text-center">
                        <div className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">98%</div>
                        <div className="text-gray-600">Satisfaction Rate</div>
                    </div>
                </div>

                {/* CTA */}
                <div className="mt-16 text-center">
                    <p className="text-lg text-gray-600 mb-6">
                        Join thousands of satisfied creators and marketers
                    </p>
                    <a
                        href="/auth/signup"
                        className="inline-block bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-xl transition-all duration-200"
                    >
                        Start Your Free Trial
                    </a>
                </div>
            </div>
        </section>
    );
}
