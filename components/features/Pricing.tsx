import { Check } from 'lucide-react';
import Link from 'next/link';

const pricingPlans = [
    {
        name: 'Starter',
        price: 'Free',
        period: 'forever',
        description: 'Perfect for trying out StaudiyoKehak',
        features: [
            '5 AI-generated posts per month',
            '1 social media platform',
            'Basic templates',
            'Email support',
            '24-hour post scheduling',
        ],
        cta: 'Get Started',
        ctaLink: '/auth/signup',
        highlighted: false,
        gradient: 'from-gray-600 to-gray-800',
    },
    {
        name: 'Professional',
        price: '$29',
        period: 'per month',
        description: 'For serious content creators',
        features: [
            'Unlimited AI-generated posts',
            '5 social media platforms',
            'Advanced templates',
            'Priority support',
            'Smart scheduling',
            'Analytics dashboard',
            'Custom branding',
        ],
        cta: 'Start Free Trial',
        ctaLink: '/auth/signup?plan=pro',
        highlighted: true,
        gradient: 'from-purple-600 to-blue-600',
    },
    {
        name: 'Enterprise',
        price: 'Custom',
        period: 'contact us',
        description: 'For teams and agencies',
        features: [
            'Everything in Professional',
            'Unlimited platforms',
            'Team collaboration',
            'Dedicated account manager',
            'Custom AI training',
            'API access',
            'White-label solution',
            'SLA guarantee',
        ],
        cta: 'Contact Sales',
        ctaLink: '/contact',
        highlighted: false,
        gradient: 'from-indigo-600 to-purple-600',
    },
];

export function Pricing() {
    return (
        <section id="pricing" className="py-20 bg-white" aria-labelledby="pricing-heading">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 id="pricing-heading" className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                        Simple, Transparent Pricing
                    </h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Choose the perfect plan for your needs. All plans include a 14-day free trial.
                    </p>
                </div>

                {/* Pricing Cards */}
                <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto" role="list">
                    {pricingPlans.map((plan, index) => (
                        <article
                            key={index}
                            className={`relative rounded-2xl border-2 p-8 transition-all duration-200 ${plan.highlighted
                                    ? 'border-purple-600 shadow-xl scale-105'
                                    : 'border-gray-200 hover:border-gray-300 hover:shadow-lg'
                                }`}
                            role="listitem"
                        >
                            {plan.highlighted && (
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                                    <span className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                                        Most Popular
                                    </span>
                                </div>
                            )}

                            {/* Plan Name */}
                            <div className="mb-6">
                                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                                <p className="text-gray-600">{plan.description}</p>
                            </div>

                            {/* Price */}
                            <div className="mb-6">
                                <div className="flex items-baseline">
                                    <span className="text-5xl font-bold text-gray-900">{plan.price}</span>
                                    {plan.price !== 'Custom' && plan.price !== 'Free' && (
                                        <span className="text-gray-600 ml-2">/{plan.period.split(' ')[0]}</span>
                                    )}
                                </div>
                                <p className="text-sm text-gray-500 mt-1">{plan.period}</p>
                            </div>

                            {/* Features */}
                            <ul className="space-y-4 mb-8" role="list">
                                {plan.features.map((feature, featureIndex) => (
                                    <li key={featureIndex} className="flex items-start">
                                        <Check
                                            className={`w-5 h-5 mr-3 mt-0.5 flex-shrink-0 ${plan.highlighted ? 'text-purple-600' : 'text-green-600'
                                                }`}
                                            aria-hidden="true"
                                        />
                                        <span className="text-gray-700">{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            {/* CTA Button */}
                            <Link
                                href={plan.ctaLink}
                                className={`block w-full text-center py-3 px-6 rounded-lg font-semibold transition-all duration-200 ${plan.highlighted
                                        ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:shadow-lg hover:scale-105'
                                        : 'bg-gray-900 text-white hover:bg-gray-800'
                                    }`}
                                aria-label={`${plan.cta} for ${plan.name} plan`}
                            >
                                {plan.cta}
                            </Link>
                        </article>
                    ))}
                </div>

                {/* Additional Info */}
                <div className="text-center mt-12">
                    <p className="text-gray-600">
                        All plans include a 14-day free trial. No credit card required.{' '}
                        <Link href="/docs" className="text-purple-600 hover:text-purple-700 font-semibold">
                            Learn more about our features
                        </Link>
                    </p>
                </div>
            </div>
        </section>
    );
}
