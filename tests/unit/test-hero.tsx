import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Hero } from '@/components/features/Hero';

describe('Hero Component', () => {
    it('should render the hero section', () => {
        render(<Hero />);

        const heroSection = screen.getByRole('region');
        expect(heroSection).toBeInTheDocument();
    });

    it('should display the main heading', () => {
        render(<Hero />);

        const heading = screen.getByRole('heading', { level: 1 });
        expect(heading).toBeInTheDocument();
        expect(heading).toHaveTextContent(/Create, Schedule, and Dominate Social Media/i);
    });

    it('should display the AI badge', () => {
        render(<Hero />);

        const badge = screen.getByText(/AI-Powered Content Generation/i);
        expect(badge).toBeInTheDocument();
    });

    it('should display the description text', () => {
        render(<Hero />);

        const description = screen.getByText(/Transform your social media presence/i);
        expect(description).toBeInTheDocument();
    });

    it('should have a "Get Started Free" CTA button', () => {
        render(<Hero />);

        const ctaButton = screen.getByRole('link', { name: /Get Started Free/i });
        expect(ctaButton).toBeInTheDocument();
        expect(ctaButton).toHaveAttribute('href', '/auth/signup');
    });

    it('should have a "Learn More" button', () => {
        render(<Hero />);

        const learnMoreButton = screen.getByRole('link', { name: /Learn More/i });
        expect(learnMoreButton).toBeInTheDocument();
        expect(learnMoreButton).toHaveAttribute('href', '#features');
    });

    it('should display statistics', () => {
        render(<Hero />);

        expect(screen.getByText('10K+')).toBeInTheDocument();
        expect(screen.getByText('Active Users')).toBeInTheDocument();
        expect(screen.getByText('1M+')).toBeInTheDocument();
        expect(screen.getByText('Posts Generated')).toBeInTheDocument();
        expect(screen.getByText('95%')).toBeInTheDocument();
        expect(screen.getByText('Satisfaction Rate')).toBeInTheDocument();
    });

    it('should have proper CSS classes for styling', () => {
        const { container } = render(<Hero />);

        const section = container.querySelector('section');
        expect(section).toHaveClass('py-20');
    });

    it('should have gradient styling on the primary CTA', () => {
        render(<Hero />);

        const ctaButton = screen.getByRole('link', { name: /Get Started Free/i });
        expect(ctaButton).toHaveClass('bg-gradient-to-r', 'from-purple-600', 'to-blue-600');
    });

    it('should render the ArrowRight icon in CTA button', () => {
        render(<Hero />);

        const ctaButton = screen.getByRole('link', { name: /Get Started Free/i });
        const svg = ctaButton.querySelector('svg');
        expect(svg).toBeInTheDocument();
    });
});
