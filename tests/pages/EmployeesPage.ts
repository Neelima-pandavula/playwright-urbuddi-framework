import {Page, Locator, expect} from '@playwright/test';

export class Addemployees {
    readonly page : Page;
    readonly addEmployee : Locator;
    readonly firstname : Locator;
    readonly lastname : Locator;
    readonly empId : Locator;
    readonly email : Locator;
    readonly personalMail : Locator;
    readonly password : Locator;
    readonly role : Locator;
    readonly dob : Locator;
    readonly joiningDate : Locator;
    readonly pastExperience : Locator;
    readonly qualifications : Locator;
    readonly department : Locator;
    readonly gender : Locator;
    readonly mobilenumber : Locator;
    readonly bloodgroop : Locator;
    readonly designation : Locator;
    readonly salary : Locator;
    readonly location : Locator;
    readonly reportingto : Locator;
    readonly add : Locator;
    readonly addEmployeeHeader : Locator;
    readonly successMessage : Locator;
    readonly empIdFilter : Locator;
    readonly deleteEmpId : Locator;
    readonly confirmDelete : Locator;
    readonly successDeletion : Locator;
    

    constructor(page : Page){
        this.page = page;
        this.addEmployee = page.getByRole('button', {name : 'Add Employee' });
        this.firstname = page.locator('[name="firstName"]');
        this.lastname =  page.locator('[name="lastName"]');
        this.empId = page.locator('#employeeID');
        this.email = page.locator('[name="email"]');
        this.personalMail = page.locator('[name="personalEmail"]')
        this.password = page.locator('[name="password"]');
        this.role = page.locator('#role');
        this.dob = page.locator('[name="dob"]');
        this.joiningDate = page.locator('[name="joiningDate"]');
        this.pastExperience = page.locator('[name="pastExperience"]');
        this.qualifications = page.locator('#qualifications');
        this.department = page.locator('[name="department"]');
        this.gender = page.locator('#gender');
        this.mobilenumber = page.locator('[name="mobileNumber"]');
        this.bloodgroop = page.locator('#bloodGroup');
        this.designation = page.locator('[name="designation"]');
        this.salary = page.locator('#salary');
        this.location = page.locator('[name="location"]');
        this.reportingto = page.locator('#reportingTo');
        this.add = page.getByRole('button', {name : 'Add'});
        this.addEmployeeHeader = page.locator('.modal-heading');
        this.successMessage = page.getByRole('status').filter({ hasText: 'Saved Successfully' }).first();
        this.empIdFilter = page.getByRole('textbox',{name : 'EMP ID Filter Input'});
        this.deleteEmpId = page.locator('.deleteIcon');
        this.confirmDelete = page.getByRole('button', {name : 'Yes'});
        this.successDeletion = page.getByRole('status').filter({hasText: 'Employee Deleted Successfully'}).first();
    }

    async navigate(){
        await this.page.goto('/login/');
        //{waitUntil:'load'}
        
    }

    async clickAddEmployee(){
        await this.addEmployee.click();
    }


    async fillEmployeeData(data : any){
        await this.firstname.fill(data.firstName);
        await this.lastname.fill(data.lastName);
        await this.empId.fill(data.employeeId);
        await this.email.fill(data.email);
        await this.personalMail.fill(data.personalEmail);
        await this.password.fill(data.password);
        await this.role.selectOption(data.role);
        await this.dob.fill(String(data.dob));
        await this.joiningDate.fill(String(data.joiningDate));
        await this.pastExperience.fill(String(data.pastExperience));
        await this.qualifications.selectOption(data.qualifications);
        await this.department.fill(data.department);
        await this.gender.selectOption(data.gender);
        await this.mobilenumber.fill(data.mobileNumber);
        await this.bloodgroop.selectOption(data.bloodGroup);
        await this.designation.fill(data.designation);
        await this.salary.fill(String(data.salary));
        await this.location.fill(data.location);

        await this.reportingto.waitFor({state : "visible"});  
        await this.reportingto.selectOption({       
        value: data.reportingTo
        });

    }


    async clickAdd(){
        await this.add.last().click();
       // await this.successMessage.waitFor({state : "visible"});
        
    }

    async empIdfilter(data : any){
        await this.empIdFilter.fill(data.employeeId);
    }
    

    async selectEmpId(emplId : string){
        const row = this.page.locator('.ag-row').filter({hasText : emplId})
        await row.locator('input.ag-checkbox-input').check();
    }
    
    async deleteEmployee(){
        await this.deleteEmpId.click();
        await this.confirmDelete.click();
        
        // await this.successDeletion.waitFor({state "visible" });
    }
}