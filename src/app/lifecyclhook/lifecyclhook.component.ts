import { AfterViewInit, Component, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-lifecyclhook',
  templateUrl: './lifecyclhook.component.html',
  styleUrls: ['./lifecyclhook.component.css']
})
export class LifecyclhookComponent implements OnInit, AfterViewInit, OnDestroy,OnChanges {

  data: string = 'hi';
  simpleInput: string = '';

  constructor() {
    console.log('constructor life cycle hook triggered!!');
  }

  ngOnDestroy(): void {
    console.log('LifecyclhookComponent ngOnDestroy lifecycle hook got triggered!!');
  }

  ngAfterViewInit(): void {
    console.log('LifecyclhookComponent ngAfterViewInit lifecycle hook got triggered!!');
  }

 ngOnInit() { //Initialize
   console.log('LifecyclhookComponent ngOnInit lifecycle hook got triggered!!');
 }
 ngOnChanges(changes:SimpleChanges){
   
  console.log(changes);
 }




}
