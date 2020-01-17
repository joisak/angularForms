import { Component, OnInit, Input, Output, EventEmitter, AfterContentInit, forwardRef  } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';


@Component({
  selector: 'ui-text-input',
  templateUrl: 'textInputComponent.html',
  styleUrls: ['textInputComponent.scss']
})

export class TextInputComponent implements AfterContentInit {

 

  constructor() { }

  value:string = ''; 
  obj = {};
  error;
  testValue;

  @Input() label: string;
  @Input() name: string;
  @Input() type: string;
  @Input() required?: boolean;
  @Input() errorMessage;

  @Output() eventValue = new EventEmitter();

  changeValue(name, event?) {
    if(event.target.required){
      this.obj[name]= [this.value, 'required'];
    } else {
      this.obj[name] = this.value;
    }
   
    this.eventValue.emit(this.obj);
  }

  focusOutFunction(value) {
    console.log(value);
    if(this.errorMessage && !value.length) {
      this.error = true;
      
    } else {
      this.error = false;
    }
  }


  showValue(value) {
    console.log('A change!', value);
    console.log('test', this.eventValue);
  } 




  ngAfterContentInit() {
    
  }


}
