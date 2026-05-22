import {Page, Locator} from '@playwright/test';

export class DashboardPage{
    readonly page : Page;
    readonly employees : Locator;

    constructor(page : Page){
        this.page = page;
        this.employees = page.getByRole('link', {name : 'Employees'});
    }

   async clickEmployees(){
    await this.employees.click();
   }

}