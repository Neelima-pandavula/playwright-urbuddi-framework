import {test as base, expect} from '@playwright/test';
import { LoginPage } from './pages/LoginPage';
import { DashboardPage } from './pages/DashboardPage';
import { Addemployees } from './pages/EmployeesPage';

type MyFixtures = {
  employee: Addemployees;
  loginPage: LoginPage;
  dashboardPage : DashboardPage;
}; 


export const test = base.extend<MyFixtures>({
    loginPage: async({page}, use) =>{
        const loginPage = new LoginPage(page);
        await use(loginPage);
    },
    dashboardPage : async({page}, use) => {
        const dashboardPage = new DashboardPage(page);
        await use(dashboardPage);
    },
    employee : async({page}, use) => {
        const employee = new Addemployees(page);
        await use(employee);
    }
});
export { expect };