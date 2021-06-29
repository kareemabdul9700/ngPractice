import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeeidComponent } from './employeeid/employeeid.component';
import { LoginService } from './services/app.service';
import { EmployeeService } from './services/employee.service';
import { OutsideURLService } from './services/outsideURL.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    EmployeeidComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ 
    LoginService,
    EmployeeService,
    OutsideURLService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
