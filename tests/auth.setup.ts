import { chromium,expect, test as setup } from '@playwright/test';
import { LoginPage } from './pages/LoginPage';
import { users } from './data/loginData';
import { DashboardPage } from './pages/DashboardPage';



setup('login', async () => {
  const browser = await chromium.launch({ headless: true });
    const page = await browser.newPage();
  
    const loginPage = new LoginPage(page);
    const dashboardPage = new DashboardPage(page);
  
   // await page.goto(`${process.env.BASE_URL}/login`);
   await page.goto('/login');
  
    await loginPage.login(users[0].email, users[0].password);

    await page.waitForTimeout(2000);

  

    await expect(loginPage.dashboardHeader).toHaveText('Dashboard');


  
     await page.context().storageState({ path: 'tests/storageState.json' });
   
  
  
    
  
  
  
    await browser.close();
});