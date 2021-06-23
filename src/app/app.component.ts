import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ngteaching';


  constructor(private router: Router){}

  
  goToEmployee(){
    this.router.navigateByUrl('/employee/1');
  }
  goToEmployeeid(){
    this.router.navigateByUrl('/employeeid/3');
  }

}
