const { test, expect } = require('@playwright/test');

test.describe('Tags demo', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('https://google.com');
    });

    // Tag in title: run with `npx playwright test -g "@smoke"`
    test('[@smoke][@homepage] should load homepage and have correct title', async ({ page }) => {
        await expect(page).toHaveTitle(/Example Domain/);
    });

    // Another tag
    test('[@regression] should contain "More information" link', async ({ page }) => {
        const link = page.locator('a', { hasText: 'More information' });
        await expect(link).toBeVisible();
    });

    // Add runtime annotation (custom metadata)
    test('[@integration] demo with runtime annotation', async ({ page }, testInfo) => {
        testInfo.annotations.push({ type: 'tag', description: 'integration' });
        // example assertion
        await expect(page.locator('h1')).toHaveText('Example Domain');
    });
});