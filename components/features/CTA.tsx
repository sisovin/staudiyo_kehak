import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export function CTA() {
    return (
        <section className="py-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto text-center bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                        Ready to Transform Your Social Media Strategy?
                    </h2>
                    <p className="text-purple-100 text-xl mb-8">
                        Join thousands of creators who are already using StaudiyoKehak to grow their audience
                        and engagement.
                    </p>
                    <Link
                        href="/auth/signup"
                        className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-xl transition-all duration-200 inline-flex items-center"
                    >
                        Create Your Free Account
                        <ArrowRight className="w-5 h-5 ml-2" />
                    </Link>
                </div>
            </div>
        </section>
    );
}
