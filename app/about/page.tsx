import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { About } from '@/components/features/About';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'About Us - StaudiyoKehak | Our Story, Mission & Team',
    description:
        'Learn about StaudiyoKehak\'s mission to democratize social media success with AI-powered tools. Meet our team and discover our values.',
    keywords: 'about us, company, mission, vision, team, social media tools',
};

export default function AboutPage() {
    return (
        <>
            <Header />
            <main className="min-h-screen">
                <About />
            </main>
            <Footer />
        </>
    );
}
