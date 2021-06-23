import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  constructor(private _ar: ActivatedRoute) { }

  

  ngOnInit(): void {
    console.log(this._ar.snapshot.paramMap.get('idd'));
  }

}
