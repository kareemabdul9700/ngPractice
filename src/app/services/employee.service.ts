import { Injectable } from "@angular/core";


@Injectable({
    providedIn: 'root'
})
export class EmployeeService {

    public employeeName: string = 'John';

    constructor(){
        console.log('Service: Employee Service!!')
    }

    checkEmployeeName(){
        console.log(this.employeeName);
    }

    getEmployeeName(){
        return this.employeeName;
    }

}

