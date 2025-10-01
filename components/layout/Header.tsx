import Link from 'next/link';
import { Zap } from 'lucide-react';

export function Header() {
    return (
        <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-sm border-b border-gray-200">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <Link href="/" className="flex items-center space-x-2">
                        <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
                            <Zap className="w-5 h-5 text-white" />
                        </div>
                        <span className="text-xl font-bold text-gray-900">StaudiyoKehak</span>
                    </Link>

                    {/* Navigation */}
                    <nav className="hidden md:flex items-center space-x-8">
                        <Link href="/" className="text-gray-600 hover:text-gray-900 transition">
                            Home
                        </Link>
                        <Link href="/features" className="text-gray-600 hover:text-gray-900 transition">
                            Features
                        </Link>
                        <Link href="/about" className="text-gray-600 hover:text-gray-900 transition">
                            About
                        </Link>
                        <Link href="/pricing" className="text-gray-600 hover:text-gray-900 transition">
                            Pricing
                        </Link>
                        <Link href="/docs" className="text-gray-600 hover:text-gray-900 transition">
                            Documentation
                        </Link>
                        <Link href="/testimonials" className="text-gray-600 hover:text-gray-900 transition">
                            Testimonials
                        </Link>
                        <Link href="/contact" className="text-gray-600 hover:text-gray-900 transition">
                            Contact
                        </Link>
                    </nav>

                    {/* Auth Buttons */}
                    <div className="flex items-center space-x-4">
                        <Link
                            href="/auth/signin"
                            className="text-gray-600 hover:text-gray-900 transition"
                        >
                            Sign In
                        </Link>
                        <Link
                            href="/auth/signup"
                            className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-2 rounded-lg hover:shadow-lg transition"
                        >
                            Get Started Free
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    );
}
