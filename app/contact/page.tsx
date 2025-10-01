'use client';

import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Mail, Phone, MapPin, MessageSquare, Clock, Send, CheckCircle } from 'lucide-react';
import { useState } from 'react';

const contactMethods = [
    {
        icon: Mail,
        title: 'Email Us',
        description: 'Our team typically responds within 24 hours',
        contact: 'support@staudiyokehak.com',
        link: 'mailto:support@staudiyokehak.com',
        color: 'from-blue-600 to-cyan-600',
    },
    {
        icon: Phone,
        title: 'Call Us',
        description: 'Mon-Fri from 9am to 6pm EST',
        contact: '+1 (555) 123-4567',
        link: 'tel:+15551234567',
        color: 'from-green-600 to-teal-600',
    },
    {
        icon: MapPin,
        title: 'Visit Us',
        description: 'Come say hello at our office',
        contact: '123 Innovation Street, San Francisco, CA 94102',
        link: 'https://maps.google.com',
        color: 'from-purple-600 to-pink-600',
    },
    {
        icon: MessageSquare,
        title: 'Live Chat',
        description: 'Get instant answers to your questions',
        contact: 'Available 24/7',
        link: '#',
        color: 'from-orange-600 to-red-600',
    },
];

const departments = [
    { value: 'general', label: 'General Inquiry' },
    { value: 'sales', label: 'Sales & Pricing' },
    { value: 'support', label: 'Technical Support' },
    { value: 'partnership', label: 'Partnership Opportunities' },
    { value: 'feedback', label: 'Feedback & Suggestions' },
    { value: 'other', label: 'Other' },
];

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        company: '',
        department: 'general',
        subject: '',
        message: '',
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 2000));

        setIsSubmitting(false);
        setIsSubmitted(true);

        // Reset form after 3 seconds
        setTimeout(() => {
            setIsSubmitted(false);
            setFormData({
                name: '',
                email: '',
                company: '',
                department: 'general',
                subject: '',
                message: '',
            });
        }, 3000);
    };

    return (
        <>
            <Header />
            <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
                {/* Hero Section */}
                <section className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-20 px-4 sm:px-6 lg:px-8">
                    <div className="container mx-auto max-w-4xl text-center">
                        <h1 className="text-5xl md:text-6xl font-bold mb-6">Get in Touch</h1>
                        <p className="text-xl md:text-2xl text-purple-100 mb-8">
                            We&apos;d love to hear from you. Our team is always here to help.
                        </p>
                    </div>
                </section>

                {/* Contact Methods */}
                <section className="py-20 px-4 sm:px-6 lg:px-8">
                    <div className="container mx-auto max-w-6xl">
                        <div className="text-center mb-12">
                            <h2 className="text-4xl font-bold text-gray-900 mb-4">
                                Choose Your Preferred Contact Method
                            </h2>
                            <p className="text-xl text-gray-600">
                                We&apos;re available through multiple channels to serve you better
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {contactMethods.map((method, index) => {
                                const Icon = method.icon;
                                return (
                                    <a
                                        key={index}
                                        href={method.link}
                                        className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 group"
                                        target={method.link.startsWith('http') ? '_blank' : undefined}
                                        rel={method.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                                    >
                                        <div
                                            className={`w-14 h-14 bg-gradient-to-r ${method.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                                        >
                                            <Icon className="w-7 h-7 text-white" aria-hidden="true" />
                                        </div>
                                        <h3 className="text-lg font-bold text-gray-900 mb-2">{method.title}</h3>
                                        <p className="text-sm text-gray-600 mb-3">{method.description}</p>
                                        <p className="text-purple-600 font-medium group-hover:text-purple-700">
                                            {method.contact}
                                        </p>
                                    </a>
                                );
                            })}
                        </div>
                    </div>
                </section>

                {/* Contact Form Section */}
                <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
                    <div className="container mx-auto max-w-4xl">
                        <div className="text-center mb-12">
                            <h2 className="text-4xl font-bold text-gray-900 mb-4">Send Us a Message</h2>
                            <p className="text-xl text-gray-600">
                                Fill out the form below and we&apos;ll get back to you as soon as possible
                            </p>
                        </div>

                        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
                            {isSubmitted ? (
                                <div className="text-center py-12">
                                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                                        <CheckCircle className="w-10 h-10 text-green-600" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                                        Message Sent Successfully!
                                    </h3>
                                    <p className="text-gray-600">
                                        Thank you for contacting us. We&apos;ll get back to you within 24 hours.
                                    </p>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="grid md:grid-cols-2 gap-6">
                                        {/* Name */}
                                        <div>
                                            <label
                                                htmlFor="name"
                                                className="block text-sm font-semibold text-gray-900 mb-2"
                                            >
                                                Full Name *
                                            </label>
                                            <input
                                                type="text"
                                                id="name"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                required
                                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent transition-all"
                                                placeholder="John Doe"
                                            />
                                        </div>

                                        {/* Email */}
                                        <div>
                                            <label
                                                htmlFor="email"
                                                className="block text-sm font-semibold text-gray-900 mb-2"
                                            >
                                                Email Address *
                                            </label>
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                required
                                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent transition-all"
                                                placeholder="john@example.com"
                                            />
                                        </div>
                                    </div>

                                    <div className="grid md:grid-cols-2 gap-6">
                                        {/* Company */}
                                        <div>
                                            <label
                                                htmlFor="company"
                                                className="block text-sm font-semibold text-gray-900 mb-2"
                                            >
                                                Company Name
                                            </label>
                                            <input
                                                type="text"
                                                id="company"
                                                name="company"
                                                value={formData.company}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent transition-all"
                                                placeholder="Your Company"
                                            />
                                        </div>

                                        {/* Department */}
                                        <div>
                                            <label
                                                htmlFor="department"
                                                className="block text-sm font-semibold text-gray-900 mb-2"
                                            >
                                                Department *
                                            </label>
                                            <select
                                                id="department"
                                                name="department"
                                                value={formData.department}
                                                onChange={handleChange}
                                                required
                                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent transition-all"
                                            >
                                                {departments.map((dept) => (
                                                    <option key={dept.value} value={dept.value}>
                                                        {dept.label}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>
                                    </div>

                                    {/* Subject */}
                                    <div>
                                        <label
                                            htmlFor="subject"
                                            className="block text-sm font-semibold text-gray-900 mb-2"
                                        >
                                            Subject *
                                        </label>
                                        <input
                                            type="text"
                                            id="subject"
                                            name="subject"
                                            value={formData.subject}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent transition-all"
                                            placeholder="How can we help you?"
                                        />
                                    </div>

                                    {/* Message */}
                                    <div>
                                        <label
                                            htmlFor="message"
                                            className="block text-sm font-semibold text-gray-900 mb-2"
                                        >
                                            Message *
                                        </label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            required
                                            rows={6}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent transition-all resize-none"
                                            placeholder="Tell us more about your inquiry..."
                                        />
                                    </div>

                                    {/* Submit Button */}
                                    <div>
                                        <button
                                            type="submit"
                                            disabled={isSubmitting}
                                            className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-xl transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed inline-flex items-center justify-center"
                                        >
                                            {isSubmitting ? (
                                                <>
                                                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                                                    Sending...
                                                </>
                                            ) : (
                                                <>
                                                    <Send className="w-5 h-5 mr-2" />
                                                    Send Message
                                                </>
                                            )}
                                        </button>
                                    </div>
                                </form>
                            )}
                        </div>
                    </div>
                </section>

                {/* Office Hours & FAQ */}
                <section className="py-20 px-4 sm:px-6 lg:px-8">
                    <div className="container mx-auto max-w-6xl">
                        <div className="grid md:grid-cols-2 gap-12">
                            {/* Office Hours */}
                            <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl p-8 border-2 border-purple-100">
                                <div className="flex items-center mb-6">
                                    <Clock className="w-8 h-8 text-purple-600 mr-3" />
                                    <h3 className="text-2xl font-bold text-gray-900">Office Hours</h3>
                                </div>
                                <div className="space-y-4">
                                    <div className="flex justify-between">
                                        <span className="text-gray-700 font-medium">Monday - Friday</span>
                                        <span className="text-gray-900 font-semibold">9:00 AM - 6:00 PM EST</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-gray-700 font-medium">Saturday</span>
                                        <span className="text-gray-900 font-semibold">10:00 AM - 4:00 PM EST</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-gray-700 font-medium">Sunday</span>
                                        <span className="text-gray-900 font-semibold">Closed</span>
                                    </div>
                                    <div className="pt-4 border-t border-purple-200">
                                        <p className="text-sm text-gray-600">
                                            * For urgent matters outside office hours, please use our 24/7 live chat
                                            support.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Quick FAQ */}
                            <div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                                    Frequently Asked Questions
                                </h3>
                                <div className="space-y-4">
                                    <div className="bg-white rounded-lg p-4 border border-gray-200">
                                        <h4 className="font-semibold text-gray-900 mb-2">
                                            How quickly will I get a response?
                                        </h4>
                                        <p className="text-gray-600 text-sm">
                                            We typically respond to all inquiries within 24 hours during business
                                            days.
                                        </p>
                                    </div>
                                    <div className="bg-white rounded-lg p-4 border border-gray-200">
                                        <h4 className="font-semibold text-gray-900 mb-2">
                                            Do you offer phone support?
                                        </h4>
                                        <p className="text-gray-600 text-sm">
                                            Yes! Phone support is available Monday-Friday, 9 AM - 6 PM EST for all
                                            paid plans.
                                        </p>
                                    </div>
                                    <div className="bg-white rounded-lg p-4 border border-gray-200">
                                        <h4 className="font-semibold text-gray-900 mb-2">
                                            Can I schedule a demo?
                                        </h4>
                                        <p className="text-gray-600 text-sm">
                                            Absolutely! Select &quot;Sales & Pricing&quot; from the department
                                            dropdown and mention your preferred time.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Map Section - Placeholder */}
                <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
                    <div className="container mx-auto max-w-6xl">
                        <div className="bg-gray-300 rounded-2xl h-96 flex items-center justify-center">
                            <div className="text-center">
                                <MapPin className="w-16 h-16 text-gray-600 mx-auto mb-4" />
                                <p className="text-gray-700 font-semibold">Map Placeholder</p>
                                <p className="text-gray-600 text-sm">
                                    123 Innovation Street, San Francisco, CA 94102
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
