import Link from 'next/link';
import { Zap } from 'lucide-react';

export function Footer() {
    return (
        <footer className="bg-gray-900 text-white py-12">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-4 gap-8">
                    {/* Brand */}
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

                    {/* Product */}
                    <div>
                        <h3 className="font-semibold mb-4">Product</h3>
                        <ul className="space-y-2 text-gray-400">
                            <li>
                                <Link href="/features" className="hover:text-white transition">
                                    Features
                                </Link>
                            </li>
                            <li>
                                <Link href="/pricing" className="hover:text-white transition">
                                    Pricing
                                </Link>
                            </li>
                            <li>
                                <Link href="/docs" className="hover:text-white transition">
                                    Documentation
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Resources */}
                    <div>
                        <h3 className="font-semibold mb-4">Resources</h3>
                        <ul className="space-y-2 text-gray-400">
                            <li>
                                <Link href="/docs/setup" className="hover:text-white transition">
                                    Setup Guide
                                </Link>
                            </li>
                            <li>
                                <Link href="/docs/architecture" className="hover:text-white transition">
                                    Architecture
                                </Link>
                            </li>
                            <li>
                                <Link href="/docs/api" className="hover:text-white transition">
                                    API Reference
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Company */}
                    <div>
                        <h3 className="font-semibold mb-4">Company</h3>
                        <ul className="space-y-2 text-gray-400">
                            <li>
                                <Link href="/about" className="hover:text-white transition">
                                    About
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact" className="hover:text-white transition">
                                    Contact
                                </Link>
                            </li>
                            <li>
                                <Link href="/privacy" className="hover:text-white transition">
                                    Privacy
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Copyright */}
                <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
                    <p>&copy; {new Date().getFullYear()} StaudiyoKehak. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
