import { chromium } from 'playwright';

(async () => {
  console.log('Launching browser...');
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();
  
  // Set mobile device viewport
  await page.setViewportSize({ width: 375, height: 812 });
  
  console.log('Navigating to local dev app...');
  await page.goto('http://localhost:5175/', { waitUntil: 'networkidle' });
  
  console.log('Waiting for mobile menu toggle button...');
  const toggleButton = await page.waitForSelector('[aria-label="Toggle mobile navigation menu"]');
  
  console.log('Clicking hamburger button...');
  await toggleButton.click();
  
  console.log('Waiting for animation to settle...');
  await page.waitForTimeout(800);
  
  console.log('Taking screenshot...');
  await page.screenshot({ path: 'mobile_menu_screenshot.png' });
  
  console.log('Screenshot saved to mobile_menu_screenshot.png');
  await browser.close();
})();
