import { Target, Users, Lightbulb, Rocket, Award, Heart, TrendingUp, Shield } from 'lucide-react';

export function About() {
    return (
        <section id="about" className="py-20 bg-white" aria-labelledby="about-heading">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 id="about-heading" className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                        About StaudiyoKehak
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Empowering creators and marketers worldwide with AI-powered social media tools
                        that transform the way content is created, scheduled, and optimized.
                    </p>
                </div>

                {/* Mission & Vision Cards */}
                <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-20">
                    {/* Mission */}
                    <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl p-8 border-2 border-purple-100">
                        <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl flex items-center justify-center mb-6">
                            <Target className="w-8 h-8 text-white" aria-hidden="true" />
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
                        <p className="text-gray-700 leading-relaxed">
                            To democratize social media success by providing powerful, AI-driven tools that
                            help every creator and business, regardless of size, build authentic connections
                            and grow their online presence with confidence.
                        </p>
                    </div>

                    {/* Vision */}
                    <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 border-2 border-blue-100">
                        <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center mb-6">
                            <Lightbulb className="w-8 h-8 text-white" aria-hidden="true" />
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
                        <p className="text-gray-700 leading-relaxed">
                            To become the world&apos;s most trusted AI-powered social media platform, where
                            creativity meets technology, enabling millions of users to amplify their voice
                            and make a lasting impact in the digital world.
                        </p>
                    </div>
                </div>

                {/* Company Hierarchy Structure */}
                <div className="mb-20">
                    <h3 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
                        Our Organizational Structure
                    </h3>

                    {/* Leadership Level */}
                    <div className="max-w-4xl mx-auto mb-8">
                        <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-white text-center shadow-xl">
                            <Award className="w-12 h-12 mx-auto mb-4" aria-hidden="true" />
                            <h4 className="text-2xl font-bold mb-2">Executive Leadership</h4>
                            <p className="text-purple-100">
                                Strategic vision and company direction
                            </p>
                        </div>
                    </div>

                    {/* Department Level */}
                    <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
                        {/* Product & Engineering */}
                        <div className="bg-white rounded-xl p-6 border-2 border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                            <Rocket className="w-10 h-10 text-purple-600 mb-4" aria-hidden="true" />
                            <h4 className="text-xl font-bold text-gray-900 mb-2">
                                Product & Engineering
                            </h4>
                            <ul className="space-y-2 text-gray-600">
                                <li>• AI/ML Team</li>
                                <li>• Platform Development</li>
                                <li>• Infrastructure</li>
                                <li>• Quality Assurance</li>
                            </ul>
                        </div>

                        {/* Customer Success */}
                        <div className="bg-white rounded-xl p-6 border-2 border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                            <Heart className="w-10 h-10 text-blue-600 mb-4" aria-hidden="true" />
                            <h4 className="text-xl font-bold text-gray-900 mb-2">
                                Customer Success
                            </h4>
                            <ul className="space-y-2 text-gray-600">
                                <li>• Support Team</li>
                                <li>• Onboarding Specialists</li>
                                <li>• Account Management</li>
                                <li>• Community Engagement</li>
                            </ul>
                        </div>

                        {/* Growth & Marketing */}
                        <div className="bg-white rounded-xl p-6 border-2 border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                            <TrendingUp className="w-10 h-10 text-green-600 mb-4" aria-hidden="true" />
                            <h4 className="text-xl font-bold text-gray-900 mb-2">
                                Growth & Marketing
                            </h4>
                            <ul className="space-y-2 text-gray-600">
                                <li>• Content Marketing</li>
                                <li>• Brand Strategy</li>
                                <li>• Partnerships</li>
                                <li>• Analytics & Insights</li>
                            </ul>
                        </div>
                    </div>

                    {/* Support Functions */}
                    <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mt-6">
                        {/* Operations */}
                        <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                            <Shield className="w-8 h-8 text-indigo-600 mb-3" aria-hidden="true" />
                            <h4 className="text-lg font-bold text-gray-900 mb-2">
                                Operations & Security
                            </h4>
                            <ul className="space-y-1 text-sm text-gray-600">
                                <li>• IT & Security</li>
                                <li>• Compliance & Legal</li>
                                <li>• Finance & Admin</li>
                            </ul>
                        </div>

                        {/* People & Culture */}
                        <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                            <Users className="w-8 h-8 text-pink-600 mb-3" aria-hidden="true" />
                            <h4 className="text-lg font-bold text-gray-900 mb-2">
                                People & Culture
                            </h4>
                            <ul className="space-y-1 text-sm text-gray-600">
                                <li>• Talent Acquisition</li>
                                <li>• Learning & Development</li>
                                <li>• Employee Experience</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Target Audience Section */}
                <div className="bg-gradient-to-b from-gray-50 to-white rounded-3xl p-12 mb-20">
                    <h3 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
                        Who We Serve
                    </h3>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {/* Content Creators */}
                        <div className="text-center">
                            <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                                <Users className="w-10 h-10 text-white" aria-hidden="true" />
                            </div>
                            <h4 className="text-xl font-bold text-gray-900 mb-2">Content Creators</h4>
                            <p className="text-gray-600">
                                Individual influencers, YouTubers, and digital creators building their
                                personal brand
                            </p>
                        </div>

                        {/* Small Businesses */}
                        <div className="text-center">
                            <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                                <Rocket className="w-10 h-10 text-white" aria-hidden="true" />
                            </div>
                            <h4 className="text-xl font-bold text-gray-900 mb-2">Small Businesses</h4>
                            <p className="text-gray-600">
                                Local businesses and startups looking to establish and grow their online
                                presence
                            </p>
                        </div>

                        {/* Marketing Agencies */}
                        <div className="text-center">
                            <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                                <TrendingUp className="w-10 h-10 text-white" aria-hidden="true" />
                            </div>
                            <h4 className="text-xl font-bold text-gray-900 mb-2">Marketing Agencies</h4>
                            <p className="text-gray-600">
                                Agencies managing multiple client accounts with diverse social media needs
                            </p>
                        </div>

                        {/* Enterprises */}
                        <div className="text-center">
                            <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-teal-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                                <Award className="w-10 h-10 text-white" aria-hidden="true" />
                            </div>
                            <h4 className="text-xl font-bold text-gray-900 mb-2">Enterprises</h4>
                            <p className="text-gray-600">
                                Large organizations requiring advanced features, security, and dedicated
                                support
                            </p>
                        </div>
                    </div>
                </div>

                {/* Core Values */}
                <div className="mb-20">
                    <h3 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
                        Our Core Values
                    </h3>

                    <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                        <div className="text-center">
                            <div className="text-5xl mb-4">🚀</div>
                            <h4 className="text-xl font-bold text-gray-900 mb-2">Innovation First</h4>
                            <p className="text-gray-600">
                                Continuously pushing boundaries with cutting-edge AI technology
                            </p>
                        </div>

                        <div className="text-center">
                            <div className="text-5xl mb-4">💙</div>
                            <h4 className="text-xl font-bold text-gray-900 mb-2">Customer Obsession</h4>
                            <p className="text-gray-600">
                                Your success is our success. We listen, learn, and deliver
                            </p>
                        </div>

                        <div className="text-center">
                            <div className="text-5xl mb-4">🤝</div>
                            <h4 className="text-xl font-bold text-gray-900 mb-2">Integrity Always</h4>
                            <p className="text-gray-600">
                                Transparent, honest, and ethical in everything we do
                            </p>
                        </div>
                    </div>
                </div>

                {/* Stats */}
                <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-3xl p-12 text-white text-center">
                    <h3 className="text-3xl md:text-4xl font-bold mb-8">StaudiyoKehak by the Numbers</h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        <div>
                            <div className="text-4xl md:text-5xl font-bold mb-2">50K+</div>
                            <div className="text-purple-200">Active Users</div>
                        </div>
                        <div>
                            <div className="text-4xl md:text-5xl font-bold mb-2">150+</div>
                            <div className="text-purple-200">Countries</div>
                        </div>
                        <div>
                            <div className="text-4xl md:text-5xl font-bold mb-2">10M+</div>
                            <div className="text-purple-200">Posts Created</div>
                        </div>
                        <div>
                            <div className="text-4xl md:text-5xl font-bold mb-2">99.9%</div>
                            <div className="text-purple-200">Uptime</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
