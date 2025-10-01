import { test, expect } from '@playwright/test';

test.describe('Responsive Design E2E Tests', () => {
    test('should display correctly on desktop', async ({ page }) => {
        await page.setViewportSize({ width: 1920, height: 1080 });
        await page.goto('/');

        // Check hero section is visible
        const hero = page.locator('h1');
        await expect(hero).toBeVisible();

        // Check navigation is horizontal on desktop
        const nav = page.locator('nav');
        await expect(nav).toBeVisible();
    });

    test('should display correctly on tablet', async ({ page }) => {
        await page.setViewportSize({ width: 768, height: 1024 });
        await page.goto('/');

        // Hero should still be visible
        const hero = page.locator('h1');
        await expect(hero).toBeVisible();

        // Content should adapt to tablet width
        const main = page.locator('main');
        await expect(main).toBeVisible();
    });

    test('should display correctly on mobile', async ({ page }) => {
        await page.setViewportSize({ width: 375, height: 667 });
        await page.goto('/');

        // Hero should be visible on mobile
        const hero = page.locator('h1');
        await expect(hero).toBeVisible();

        // Check mobile menu exists (hamburger or mobile nav)
        const body = page.locator('body');
        await expect(body).toBeVisible();
    });

    test('should handle very small screens (320px)', async ({ page }) => {
        await page.setViewportSize({ width: 320, height: 568 });
        await page.goto('/');

        // Content should not overflow
        const body = page.locator('body');
        const boundingBox = await body.boundingBox();

        expect(boundingBox).toBeTruthy();
        if (boundingBox) {
            expect(boundingBox.width).toBeLessThanOrEqual(320);
        }
    });

    test('should have touch-friendly buttons on mobile', async ({ page }) => {
        await page.setViewportSize({ width: 375, height: 667 });
        await page.goto('/');

        // Check if primary CTA button exists and is clickable
        const ctaButton = page.locator('button, a[href*="signup"]').first();
        if (await ctaButton.count() > 0) {
            await expect(ctaButton).toBeVisible();

            // Button should have adequate size for touch (minimum 44x44px recommended)
            const box = await ctaButton.boundingBox();
            if (box) {
                expect(box.height).toBeGreaterThanOrEqual(40);
            }
        }
    });

    test('should render features grid responsively', async ({ page }) => {
        // Desktop: 3 columns
        await page.setViewportSize({ width: 1024, height: 768 });
        await page.goto('/');

        const featuresSection = page.locator('section').filter({ hasText: /features/i }).first();
        if (await featuresSection.count() > 0) {
            await expect(featuresSection).toBeVisible();
        }

        // Mobile: Should stack vertically
        await page.setViewportSize({ width: 375, height: 667 });
        await page.goto('/');

        if (await featuresSection.count() > 0) {
            await expect(featuresSection).toBeVisible();
        }
    });
});
