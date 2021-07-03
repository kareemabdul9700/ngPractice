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
import { SohailService } from './services/sohail.service';
import { PDocParentComponent } from './p-doc-parent/p-doc-parent.component';
import { PDocChildComponent } from './p-doc-parent/p-doc-child/p-doc-child.component';
import { NgPracticeDemoService } from './services/ng-practice-demo.service';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    EmployeeidComponent,
    PDocParentComponent,
    PDocChildComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ 
    LoginService,
    EmployeeService,
    OutsideURLService,
    SohailService,
    NgPracticeDemoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
