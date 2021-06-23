import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-employeeid',
  templateUrl: './employeeid.component.html',
  styleUrls: ['./employeeid.component.css']
})
export class EmployeeidComponent implements OnInit {
  constructor(private _ar: ActivatedRoute) { }  

  

  ngOnInit(): void {

    console.log(this._ar.snapshot.paramMap.get('idd'));
  }

}
