import * as XLSX from 'xlsx';

export function getEmployeeData(filePath : string){

    const workBook = XLSX.readFile(filePath);

    const sheet = workBook.Sheets['Sheet1'];

    const data = XLSX.utils.sheet_to_json(sheet);

    return data[0];


};