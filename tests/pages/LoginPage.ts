import {Page, Locator} from '@playwright/test';
export class LoginPage {
    readonly page : Page;
    readonly email : Locator;
    readonly password : Locator;
    readonly loginBtn : Locator;
    readonly dashboardHeader : Locator;

constructor(page : Page){
    this.page = page;
this.email = page.locator('#userEmail');
this.password = page.locator('#userPassword');
this.loginBtn = page.getByRole('button', {name : 'Login'});
this.dashboardHeader = page.locator('[class=page-header-container] p');
}

async navigate(){
   await this.page.goto('https://dev.urbuddi.com/login');
}

async login(usermail : string , password : string){
    await this.email.fill(usermail);
    await this.password.fill(password);
    await this.loginBtn.click();
}
}

