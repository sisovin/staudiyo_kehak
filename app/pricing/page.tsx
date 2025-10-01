import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Pricing } from '@/components/features/Pricing';
import { Check, X } from 'lucide-react';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Pricing Plans - StaudiyoKehak | AI-Powered Social Media Tools',
    description:
        'Choose the perfect plan for your social media needs. Start with our free plan or upgrade to unlock unlimited AI-powered content generation, scheduling, and analytics.',
    keywords: 'pricing, social media tools, AI content generation, subscription plans',
};

export default function PricingPage() {
    return (
        <>
            <Header />
            <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
                {/* Hero Section */}
                <section className="pt-20 pb-12 px-4 sm:px-6 lg:px-8">
                    <div className="container mx-auto text-center">
                        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                            Choose Your Perfect Plan
                        </h1>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                            Start free and scale as you grow. All plans include a 14-day free trial with no
                            credit card required.
                        </p>
                        <div className="flex items-center justify-center gap-4">
                            <span className="text-gray-600">Monthly</span>
                            <button
                                className="relative inline-flex h-6 w-11 items-center rounded-full bg-purple-600 transition-colors focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2"
                                aria-label="Toggle annual billing"
                            >
                                <span className="inline-block h-4 w-4 transform rounded-full bg-white transition-transform translate-x-6" />
                            </button>
                            <span className="text-gray-900 font-semibold">
                                Annual <span className="text-green-600">(Save 20%)</span>
                            </span>
                        </div>
                    </div>
                </section>

                {/* Pricing Component */}
                <Pricing />

                {/* Comparison Table */}
                <section className="py-20 px-4 sm:px-6 lg:px-8">
                    <div className="container mx-auto max-w-6xl">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
                            Detailed Feature Comparison
                        </h2>
                        <div className="overflow-x-auto">
                            <table className="w-full border-collapse bg-white rounded-lg shadow-sm">
                                <thead>
                                    <tr className="border-b-2 border-gray-200">
                                        <th className="text-left p-4 font-semibold text-gray-900">Feature</th>
                                        <th className="text-center p-4 font-semibold text-gray-900">Starter</th>
                                        <th className="text-center p-4 font-semibold text-purple-600 bg-purple-50">
                                            Professional
                                        </th>
                                        <th className="text-center p-4 font-semibold text-gray-900">
                                            Enterprise
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <ComparisonRow
                                        feature="AI-Generated Posts"
                                        starter="5/month"
                                        professional="Unlimited"
                                        enterprise="Unlimited"
                                    />
                                    <ComparisonRow
                                        feature="Social Media Platforms"
                                        starter="1"
                                        professional="5"
                                        enterprise="Unlimited"
                                    />
                                    <ComparisonRow
                                        feature="Post Templates"
                                        starter={true}
                                        professional={true}
                                        enterprise={true}
                                    />
                                    <ComparisonRow
                                        feature="Smart Scheduling"
                                        starter={false}
                                        professional={true}
                                        enterprise={true}
                                    />
                                    <ComparisonRow
                                        feature="Analytics Dashboard"
                                        starter={false}
                                        professional={true}
                                        enterprise={true}
                                    />
                                    <ComparisonRow
                                        feature="Custom Branding"
                                        starter={false}
                                        professional={true}
                                        enterprise={true}
                                    />
                                    <ComparisonRow
                                        feature="Team Collaboration"
                                        starter={false}
                                        professional={false}
                                        enterprise={true}
                                    />
                                    <ComparisonRow
                                        feature="API Access"
                                        starter={false}
                                        professional={false}
                                        enterprise={true}
                                    />
                                    <ComparisonRow
                                        feature="Dedicated Support"
                                        starter={false}
                                        professional="Priority"
                                        enterprise="24/7"
                                    />
                                    <ComparisonRow
                                        feature="Custom AI Training"
                                        starter={false}
                                        professional={false}
                                        enterprise={true}
                                    />
                                    <ComparisonRow
                                        feature="White-Label Solution"
                                        starter={false}
                                        professional={false}
                                        enterprise={true}
                                    />
                                    <ComparisonRow
                                        feature="SLA Guarantee"
                                        starter={false}
                                        professional={false}
                                        enterprise="99.9%"
                                    />
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>

                {/* FAQ Section */}
                <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
                    <div className="container mx-auto max-w-4xl">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
                            Frequently Asked Questions
                        </h2>
                        <div className="space-y-6">
                            <FAQItem
                                question="Can I switch plans anytime?"
                                answer="Yes! You can upgrade, downgrade, or cancel your plan at any time. Changes take effect immediately, and we'll prorate any charges."
                            />
                            <FAQItem
                                question="What payment methods do you accept?"
                                answer="We accept all major credit cards (Visa, MasterCard, American Express), PayPal, and wire transfers for Enterprise plans."
                            />
                            <FAQItem
                                question="Is there a free trial?"
                                answer="Yes! All paid plans include a 14-day free trial. No credit card required to start your trial."
                            />
                            <FAQItem
                                question="What happens when I reach my post limit?"
                                answer="On the Starter plan, you'll need to upgrade to continue generating posts. Professional and Enterprise plans have unlimited posts."
                            />
                            <FAQItem
                                question="Do you offer refunds?"
                                answer="Yes, we offer a 30-day money-back guarantee on all plans. If you're not satisfied, contact us for a full refund."
                            />
                            <FAQItem
                                question="Can I get a custom plan?"
                                answer="Absolutely! Enterprise customers can get custom plans tailored to their specific needs. Contact our sales team to discuss your requirements."
                            />
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-20 px-4 sm:px-6 lg:px-8">
                    <div className="container mx-auto max-w-4xl text-center">
                        <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-12 text-white">
                            <h2 className="text-3xl md:text-4xl font-bold mb-4">
                                Still have questions?
                            </h2>
                            <p className="text-xl mb-8 text-purple-100">
                                Our team is here to help you choose the right plan for your needs.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Link
                                    href="/contact"
                                    className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:shadow-xl transition-all duration-200"
                                >
                                    Contact Sales
                                </Link>
                                <Link
                                    href="/docs"
                                    className="bg-purple-700 text-white px-8 py-4 rounded-lg font-semibold hover:bg-purple-800 transition-all duration-200"
                                >
                                    View Documentation
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}

// Helper Components
function ComparisonRow({
    feature,
    starter,
    professional,
    enterprise,
}: {
    feature: string;
    starter: boolean | string;
    professional: boolean | string;
    enterprise: boolean | string;
}) {
    const renderCell = (value: boolean | string) => {
        if (typeof value === 'boolean') {
            return value ? (
                <Check className="w-5 h-5 text-green-600 mx-auto" aria-label="Included" />
            ) : (
                <X className="w-5 h-5 text-gray-300 mx-auto" aria-label="Not included" />
            );
        }
        return <span className="text-gray-900">{value}</span>;
    };

    return (
        <tr className="border-b border-gray-100 hover:bg-gray-50">
            <td className="p-4 text-gray-700">{feature}</td>
            <td className="p-4 text-center">{renderCell(starter)}</td>
            <td className="p-4 text-center bg-purple-50">{renderCell(professional)}</td>
            <td className="p-4 text-center">{renderCell(enterprise)}</td>
        </tr>
    );
}

function FAQItem({ question, answer }: { question: string; answer: string }) {
    return (
        <div className="bg-white rounded-lg p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">{question}</h3>
            <p className="text-gray-600">{answer}</p>
        </div>
    );
}
