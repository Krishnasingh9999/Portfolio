import { chromium } from 'playwright';

(async () => {
  console.log('Launching browser...');
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();
  
  // Set mobile device viewport
  await page.setViewportSize({ width: 375, height: 812 });
  
  console.log('Navigating to local dev app...');
  await page.goto('http://localhost:5175/', { waitUntil: 'networkidle' });
  
  // 1. Snapshot: Initial load (at top of page)
  console.log('Taking snapshot of initial state at top of page...');
  await page.screenshot({ path: '1_initial_top.png' });
  
  // 2. Open mobile menu
  console.log('Waiting for mobile menu toggle button...');
  const toggleButton = await page.waitForSelector('[aria-label="Toggle mobile navigation menu"]');
  console.log('Clicking hamburger button...');
  await toggleButton.click();
  await page.waitForTimeout(600); // Wait for transition
  
  console.log('Taking snapshot of opened menu...');
  await page.screenshot({ path: '2_menu_opened.png' });
  
  // 3. Click "About" link
  console.log('Clicking "About" navigation link...');
  const aboutLink = await page.waitForSelector('div.w-80 a[href="#about"]');
  await aboutLink.click();
  
  // Wait during transition/scroll
  console.log('Waiting for scroll to settle...');
  await page.waitForTimeout(2000); 
  
  console.log('Taking snapshot after scrolling to About...');
  await page.screenshot({ path: '3_scrolled_to_about.png' });
  
  // 4. Scroll back to top
  console.log('Scrolling back to top...');
  await page.evaluate(() => window.scrollTo({ top: 0 }));
  await page.waitForTimeout(1000);
  
  console.log('Taking snapshot at top of page after scroll back...');
  await page.screenshot({ path: '4_back_to_top.png' });
  
  console.log('All screenshots saved!');
  await browser.close();
})();
