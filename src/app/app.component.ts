import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './services/app.service';
import { EmployeeService } from './services/employee.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ngteaching';
  appName: string = '';
  //_empsrv: any;


  constructor(private router: Router, private lgnSrv: LoginService, private _empsrv: EmployeeService){
    //console.log(this.lgnSrv.getNameFromService());
    //this._empsrv = new EmployeeService();
    this.appName = this._empsrv.employeeName;
  }


  
  goToEmployee() {
    this.router.navigateByUrl('/employee/1');
  }
  goToEmployeeid(){
    this.router.navigateByUrl('/employeeid/3');
  }

  
  checkEmployeeName(){
    this._empsrv.checkEmployeeName();
  }

}