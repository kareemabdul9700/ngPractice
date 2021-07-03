import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-p-doc-parent',
  templateUrl: './p-doc-parent.component.html',
  styleUrls: ['./p-doc-parent.component.css']
})
export class PDocParentComponent implements OnInit {


  parentData: string = 'data from parent';
  dataFromChild: string = 'india';
  count: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  takeData(valFromChild: number){
    this.count = valFromChild;
  }

}
