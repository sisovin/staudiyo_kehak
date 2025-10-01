import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Hero } from '@/components/features/Hero';
import { About } from '@/components/features/About';
import { Features } from '@/components/features/Features';
import { Pricing } from '@/components/features/Pricing';
import { Testimonials } from '@/components/features/Testimonials';
import { CTA } from '@/components/features/CTA';

export default function Home() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
            <Header />
            <main id="main-content">
                <Hero />
                <About />
                <Features />
                <Pricing />
                <Testimonials />
                <CTA />
            </main>
            <Footer />
        </div>
    );
}
