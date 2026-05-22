import { faker } from '@faker-js/faker';

export function generateEmployeeData(staticData: any){

    const emp = {
    firstName : faker.person.firstName(),
    lastName : faker.person.lastName(),
    employeeId : faker.number.int({min : 1000 , max : 9999}).toString(),
    email : faker.internet.email(),
    personalEmail : faker.internet.email(),
    password : faker.internet.password(),
    mobileNumber : faker.string.numeric(10),


    role : staticData.role,
    dob : staticData.dob,
    joiningDate : staticData.joiningDate,
    pastExperience : staticData.pastExperience,
    qualifications : staticData.qualifications,
    department : staticData.department,
    gender : staticData.gender,   
    bloodGroup : staticData.bloodGroup,
    designation : staticData.designation,
    salary : staticData.salary,
    location : staticData.location,
    reportingTo : staticData.reportingTo
    };
    return emp;
};


