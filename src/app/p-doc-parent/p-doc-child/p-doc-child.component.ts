import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-p-doc-child',
  templateUrl: './p-doc-child.component.html',
  styleUrls: ['./p-doc-child.component.css']
})
export class PDocChildComponent implements OnInit {

  capital: string = '';

  @Input("dataFromParent") //Attriute
  set dataFromParent(val: string) {
    if(val.toString().toLowerCase() == 'germany')   
      this.capital = 'Berlin';
    else 
      this.capital = 'Delhi';
  }

  @Output() 
  childToParentEvent = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  sendDataFromChildToParent(){
    this.childToParentEvent.emit(100);
  }

}
