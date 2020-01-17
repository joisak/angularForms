import { Component, OnInit, Input, Output, EventEmitter, AfterContentInit } from '@angular/core';

@Component({
  selector: 'ui-textarea',
  templateUrl: 'textAreaComponent.html',
  styleUrls: ['textAreaComponent.scss']
})
export class TextareaComponent implements OnInit,AfterContentInit {


  value = '';
  obj = {};

  @Input() disabled: boolean;
  @Input() placeholder: string = '';
  @Input() rows: number = 3;
  @Input() label: string;
  @Input() name: string;
  @Input() required?: boolean;

  @Output() eventValue = new EventEmitter();

  changeValue(name, event) {

    if(event.target.required){
      this.obj[name]= [this.value, 'required'];
    } else {
      this.obj[name] = this.value;
    }
   
    this.eventValue.emit(this.obj);
  }


  getValue(value) {
    console.log('Textarea value --> ',value);
  }

  constructor() { }

  ngOnInit() {

  }

  ngAfterContentInit() {
  
  }

}
