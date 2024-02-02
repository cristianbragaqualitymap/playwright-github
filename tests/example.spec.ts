import { test, expect } from '@playwright/test';

test.describe('Google', () => {
  test('Access to the website', async ({ page }) => {
    await page.goto('/');
    await expect(page.getByRole('img', { name: 'Google' })).toBeVisible();
  });
});
