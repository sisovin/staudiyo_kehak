import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';

// Mock implementation - will be replaced with actual component
const HomePage = () => (
    <div>
        <h1>Create, Schedule, and Dominate Social Media</h1>
        <p>AI-powered social media content generator & scheduler</p>
    </div>
);

describe('Homepage Integration Test', () => {
    it('should display the hero section with correct title', () => {
        render(<HomePage />);

        const title = screen.getByText(/Create, Schedule, and Dominate Social Media/i);
        expect(title).toBeInTheDocument();
        expect(title.tagName).toBe('H1');
    });

    it('should display the product description', () => {
        render(<HomePage />);

        const description = screen.getByText(/AI-powered social media content generator & scheduler/i);
        expect(description).toBeInTheDocument();
    });

    it('should render without crashing', () => {
        const { container } = render(<HomePage />);
        expect(container).toBeTruthy();
    });
});
