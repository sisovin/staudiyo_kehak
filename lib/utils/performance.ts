/**
 * Performance optimization utilities for lazy loading and code splitting
 */

import { ComponentType, lazy } from 'react';

/**
 * Lazy load a component with optional loading fallback
 * @param importFn - The dynamic import function
 * @returns The lazy-loaded component
 */
export function lazyLoad<T extends ComponentType<any>>(
    importFn: () => Promise<{ default: T }>
) {
    return lazy(importFn);
}

/**
 * Preload a component before it's needed
 * @param importFn - The dynamic import function
 */
export function preloadComponent(importFn: () => Promise<any>) {
    importFn();
}

/**
 * Debounce function for performance optimization
 * @param fn - The function to debounce
 * @param delay - The delay in milliseconds
 * @returns The debounced function
 */
export function debounce<T extends (...args: any[]) => any>(
    fn: T,
    delay: number
): (...args: Parameters<T>) => void {
    let timeoutId: NodeJS.Timeout;
    return (...args: Parameters<T>) => {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => fn(...args), delay);
    };
}

/**
 * Throttle function for performance optimization
 * @param fn - The function to throttle
 * @param limit - The time limit in milliseconds
 * @returns The throttled function
 */
export function throttle<T extends (...args: any[]) => any>(
    fn: T,
    limit: number
): (...args: Parameters<T>) => void {
    let inThrottle: boolean;
    return (...args: Parameters<T>) => {
        if (!inThrottle) {
            fn(...args);
            inThrottle = true;
            setTimeout(() => (inThrottle = false), limit);
        }
    };
}

/**
 * Check if an element is in the viewport
 * @param element - The DOM element to check
 * @returns True if the element is in the viewport
 */
export function isInViewport(element: HTMLElement): boolean {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

/**
 * Lazy load images when they enter the viewport
 * @param imgElement - The image element to lazy load
 */
export function lazyLoadImage(imgElement: HTMLImageElement) {
    if ('loading' in HTMLImageElement.prototype) {
        // Native lazy loading support
        imgElement.loading = 'lazy';
    } else {
        // Fallback to Intersection Observer
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const img = entry.target as HTMLImageElement;
                    const src = img.dataset.src;
                    if (src) {
                        img.src = src;
                        observer.unobserve(img);
                    }
                }
            });
        });
        observer.observe(imgElement);
    }
}

/**
 * Measure and log performance metrics
 * @param metricName - The name of the metric to measure
 * @param startMark - The start performance mark
 * @param endMark - The end performance mark
 */
export function measurePerformance(
    metricName: string,
    startMark: string,
    endMark: string
) {
    if (typeof window !== 'undefined' && window.performance) {
        try {
            performance.measure(metricName, startMark, endMark);
            const measure = performance.getEntriesByName(metricName)[0];
            console.log(`${metricName}: ${measure.duration.toFixed(2)}ms`);
            performance.clearMarks();
            performance.clearMeasures();
        } catch (error) {
            console.error('Performance measurement failed:', error);
        }
    }
}

/**
 * Web Vitals reporter for Core Web Vitals metrics
 */
export function reportWebVitals(metric: any) {
    if (process.env.NODE_ENV === 'development') {
        console.log(metric);
    }
    // In production, send to analytics
    // Example: sendToAnalytics(metric)
}
