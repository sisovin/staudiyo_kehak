import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Features } from '@/components/features/Features';

describe('Features Component', () => {
    it('should render the features section', () => {
        render(<Features />);

        const section = screen.getByRole('region');
        expect(section).toBeInTheDocument();
    });

    it('should display the section heading', () => {
        render(<Features />);

        const heading = screen.getByRole('heading', { level: 2 });
        expect(heading).toBeInTheDocument();
        expect(heading).toHaveTextContent(/Everything You Need to Succeed/i);
    });

    it('should display the section description', () => {
        render(<Features />);

        const description = screen.getByText(/Powerful features designed to help you/i);
        expect(description).toBeInTheDocument();
    });

    it('should render all 6 feature cards', () => {
        const { container } = render(<Features />);

        // Find all feature cards by their container structure
        const featureCards = container.querySelectorAll('.bg-white');
        expect(featureCards.length).toBeGreaterThanOrEqual(6);
    });

    it('should display "AI Content Generation" feature', () => {
        render(<Features />);

        expect(screen.getByText('AI Content Generation')).toBeInTheDocument();
        expect(screen.getByText(/Generate engaging posts, captions, and hashtags/i)).toBeInTheDocument();
    });

    it('should display "Smart Scheduling" feature', () => {
        render(<Features />);

        expect(screen.getByText('Smart Scheduling')).toBeInTheDocument();
        expect(screen.getByText(/Schedule posts across multiple platforms/i)).toBeInTheDocument();
    });

    it('should display "Template System" feature', () => {
        render(<Features />);

        expect(screen.getByText('Template System')).toBeInTheDocument();
        expect(screen.getByText(/Save and reuse your favorite AI prompt/i)).toBeInTheDocument();
    });

    it('should display "Multi-Platform Support" feature', () => {
        render(<Features />);

        expect(screen.getByText('Multi-Platform Support')).toBeInTheDocument();
        expect(screen.getByText(/Manage Instagram, Twitter, LinkedIn/i)).toBeInTheDocument();
    });

    it('should display "Security First" feature', () => {
        render(<Features />);

        expect(screen.getByText('Security First')).toBeInTheDocument();
        expect(screen.getByText(/Enterprise-grade security with Argon2/i)).toBeInTheDocument();
    });

    it('should display "Analytics Ready" feature', () => {
        render(<Features />);

        expect(screen.getByText('Analytics Ready')).toBeInTheDocument();
        expect(screen.getByText(/Track performance and optimize your content/i)).toBeInTheDocument();
    });

    it('should render icons for each feature', () => {
        const { container } = render(<Features />);

        // Check that SVG icons are present
        const icons = container.querySelectorAll('svg');
        expect(icons.length).toBeGreaterThanOrEqual(6);
    });

    it('should have gradient backgrounds on feature icons', () => {
        const { container } = render(<Features />);

        const iconContainers = container.querySelectorAll('.bg-gradient-to-r');
        expect(iconContainers.length).toBeGreaterThanOrEqual(6);
    });

    it('should have proper grid layout classes', () => {
        const { container } = render(<Features />);

        const grid = container.querySelector('.grid');
        expect(grid).toBeInTheDocument();
    });

    it('should have hover effects on feature cards', () => {
        const { container } = render(<Features />);

        const cards = container.querySelectorAll('.hover\\:shadow-md');
        expect(cards.length).toBeGreaterThanOrEqual(6);
    });

    it('should have proper section background styling', () => {
        const { container } = render(<Features />);

        const section = container.querySelector('section');
        expect(section).toHaveClass('bg-gray-50');
    });

    it('should display feature titles as headings', () => {
        render(<Features />);

        const featureTitles = screen.getAllByRole('heading', { level: 3 });
        expect(featureTitles.length).toBe(6);
    });
});
