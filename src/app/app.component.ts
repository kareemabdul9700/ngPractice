import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './services/app.service';
import { EmployeeService } from './services/employee.service';
import { NgPracticeDemoService } from './services/ng-practice-demo.service';
import { OutsideURLService } from './services/outsideURL.service';
import { SohailService } from './services/sohail.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ngteaching';
  appName: string = '';
  data: any = {};
  //_empsrv: any;


  constructor(private router: Router, private lgnSrv: LoginService, private _empsrv: EmployeeService, private _outUrlsrv: OutsideURLService,
    private sohailSrv: SohailService, private ngPracSrv: NgPracticeDemoService){
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

  getDataFromURL() {
      this._outUrlsrv.getDataFromOutsideURL().subscribe (
        // sucess function
        (res) => { this.data = res;},
        //errro function
        (err) => { console.log('err')  }
    );
  }

  getDataFromSohailURL(){
      this.sohailSrv.getDataFromOutsideURL(1).subscribe(
        //success FAT ARROW fn
        (result) => {  this.data = result; },

        //error FAT ARROW  fn
        (err) => {console.log(err)},

        //complete fn
        () => {  console.log('completed') }
    );
  }


  getFromCustomAPI() {
    this.ngPracSrv.getDataFromCustomAPI();
  }

}
