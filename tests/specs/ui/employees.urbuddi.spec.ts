import {test, expect} from '../../fixtures';
import { generateEmployeeData } from '../../utils/dataGenerator';
import { getEmployeeData } from '../../utils/excelReader';


test.describe.serial('retryBlock',() => {

  test.describe.configure({retries : 2});
 const staticData = getEmployeeData('C:/Users/Admin/Documents/employeeData.xlsx');
  const data = generateEmployeeData(staticData);
  let employeeid : string;
  

test('addEmployee' , async({page, employee} ) => {

 // const staticData = getEmployeeData('C:/Users/Admin/Documents/employeeData.xlsx');
 
await page.goto('/allemployees');
 
await employee.clickAddEmployee();

await expect(employee.addEmployeeHeader).toHaveText('Add Employee');

//const data = generateEmployeeData(staticData);

await expect(employee.empId).toBeVisible();

await employee.fillEmployeeData(data);

employeeid = data.employeeId;

await expect.soft(employee.empId).toHaveValue(employeeid);
await expect.soft(employee.firstname).toHaveValue(data.firstName);
await expect.soft(employee.email).toHaveValue(data.email);

await page.waitForTimeout(2000);

await employee.clickAdd();
await page.waitForTimeout(2000);

await expect(employee.successMessage).toBeVisible();

});

test ('deleteEmployee', async({page, employee}) =>{
  //const data = generateEmployeeData(staticData);
  await page.goto('/allemployees');
 


  await employee.empIdfilter(data);
await employee.selectEmpId(employeeid);
//await page.pause();

await employee.deleteEmployee();

await expect(employee.successDeletion).toHaveText('Employee Deleted Successfully');

 await page.waitForTimeout(2000);

});



});