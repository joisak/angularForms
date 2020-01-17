import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Choices } from 'projects/checkbox/src/public-api';



@Component({
  selector: 'ui-radio-button',
  templateUrl: 'radioButtonComponent.html',
  styleUrls: ['radioButtonComponent.scss']
})

export class RadioButtonComponent implements OnInit {

  value:any = '';
  obj = {};
  
  @Input() items: Choices[];
  @Input() disabled: boolean;
  @Input() label: string;
  @Input() name: string;
  @Input() required: boolean;

  @Output() eventValue = new EventEmitter();

  changeValue(name, event) {
    if(event.target.required){
      this.obj[name]= [this.value, 'required'];
    } else {
      this.obj[name] = this.value;
    }
   
    this.eventValue.emit(this.obj);
  }
  constructor(
    
  ) { }

  ngOnInit() {
  }

}
