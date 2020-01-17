import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ui-form',
  templateUrl:'./FormComponent.html',
  styles: []
})
export class FormComponent implements OnInit {

  constructor() { }

  public obj = [];

  valueEventHandler($event: any) {
    Object.assign( this.obj, $event);
    // console.log(this.obj);
  }
  

  onSubmit(x) {
    console.log(x);
    console.log('Value array --> ', this.obj);
  }

  onTextChange(text: string) {
    console.log('OUTPUT ',text);
  }

  ngOnInit() {
  }

}
