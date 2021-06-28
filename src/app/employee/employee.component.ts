import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LoginService } from '../services/app.service';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  name: string = '';

  constructor(private _ar: ActivatedRoute, private _lsrv: LoginService, private _empsrv: EmployeeService) { 
    //console.log("Employee Component: " + this._lsrv.getNameFromService());
    console.log('Employee Instance');
    this.name = this._empsrv.employeeName;
  }

  

  ngOnInit(): void {
    console.log(this._ar.snapshot.paramMap.get('idd'));

  }

  changeEmployeeName(){
    this._empsrv.employeeName = "Raju";
  }

  checkEmployeeName(){
    this._empsrv.checkEmployeeName();
  }

}
