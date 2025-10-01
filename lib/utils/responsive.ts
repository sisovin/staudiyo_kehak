/**
 * Responsive design utilities for handling breakpoints and device detection
 */

export const BREAKPOINTS = {
    mobile: 320,
    mobileLarge: 375,
    tablet: 768,
    desktop: 1024,
    desktopLarge: 1280,
    desktopXL: 1920,
} as const;

export type Breakpoint = keyof typeof BREAKPOINTS;

/**
 * Check if viewport width matches a specific breakpoint
 * @param breakpoint - The breakpoint to check
 * @param width - The current viewport width
 * @returns True if the viewport matches the breakpoint
 */
export function isBreakpoint(breakpoint: Breakpoint, width: number): boolean {
    switch (breakpoint) {
        case 'mobile':
            return width >= BREAKPOINTS.mobile && width < BREAKPOINTS.mobileLarge;
        case 'mobileLarge':
            return width >= BREAKPOINTS.mobileLarge && width < BREAKPOINTS.tablet;
        case 'tablet':
            return width >= BREAKPOINTS.tablet && width < BREAKPOINTS.desktop;
        case 'desktop':
            return width >= BREAKPOINTS.desktop && width < BREAKPOINTS.desktopLarge;
        case 'desktopLarge':
            return width >= BREAKPOINTS.desktopLarge && width < BREAKPOINTS.desktopXL;
        case 'desktopXL':
            return width >= BREAKPOINTS.desktopXL;
        default:
            return false;
    }
}

/**
 * Get the current breakpoint based on viewport width
 * @param width - The current viewport width
 * @returns The current breakpoint name
 */
export function getCurrentBreakpoint(width: number): Breakpoint {
    if (width >= BREAKPOINTS.desktopXL) return 'desktopXL';
    if (width >= BREAKPOINTS.desktopLarge) return 'desktopLarge';
    if (width >= BREAKPOINTS.desktop) return 'desktop';
    if (width >= BREAKPOINTS.tablet) return 'tablet';
    if (width >= BREAKPOINTS.mobileLarge) return 'mobileLarge';
    return 'mobile';
}

/**
 * Check if the device is mobile (tablet or smaller)
 * @param width - The current viewport width
 * @returns True if mobile device
 */
export function isMobile(width: number): boolean {
    return width < BREAKPOINTS.desktop;
}

/**
 * Check if the device is tablet
 * @param width - The current viewport width
 * @returns True if tablet device
 */
export function isTablet(width: number): boolean {
    return width >= BREAKPOINTS.tablet && width < BREAKPOINTS.desktop;
}

/**
 * Check if the device is desktop
 * @param width - The current viewport width
 * @returns True if desktop device
 */
export function isDesktop(width: number): boolean {
    return width >= BREAKPOINTS.desktop;
}

/**
 * Get responsive grid columns based on breakpoint
 * @param breakpoint - The current breakpoint
 * @returns Number of columns for the breakpoint
 */
export function getGridColumns(breakpoint: Breakpoint): number {
    switch (breakpoint) {
        case 'mobile':
        case 'mobileLarge':
            return 1;
        case 'tablet':
            return 2;
        case 'desktop':
        case 'desktopLarge':
        case 'desktopXL':
            return 3;
        default:
            return 1;
    }
}

/**
 * Get responsive padding based on breakpoint
 * @param breakpoint - The current breakpoint
 * @returns Padding class names
 */
export function getResponsivePadding(breakpoint: Breakpoint): string {
    switch (breakpoint) {
        case 'mobile':
        case 'mobileLarge':
            return 'px-4';
        case 'tablet':
            return 'px-6';
        case 'desktop':
        case 'desktopLarge':
        case 'desktopXL':
            return 'px-8';
        default:
            return 'px-4';
    }
}

/**
 * Get responsive font size based on breakpoint
 * @param breakpoint - The current breakpoint
 * @returns Font size class names
 */
export function getResponsiveFontSize(breakpoint: Breakpoint, base: 'text' | 'heading'): string {
    if (base === 'heading') {
        switch (breakpoint) {
            case 'mobile':
            case 'mobileLarge':
                return 'text-3xl';
            case 'tablet':
                return 'text-4xl';
            case 'desktop':
            case 'desktopLarge':
            case 'desktopXL':
                return 'text-5xl';
            default:
                return 'text-3xl';
        }
    } else {
        switch (breakpoint) {
            case 'mobile':
            case 'mobileLarge':
                return 'text-sm';
            case 'tablet':
                return 'text-base';
            case 'desktop':
            case 'desktopLarge':
            case 'desktopXL':
                return 'text-lg';
            default:
                return 'text-sm';
        }
    }
}
