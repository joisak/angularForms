import { Component, OnInit, Input, Output, EventEmitter, forwardRef } from '@angular/core';
import { Choices } from 'projects/checkbox/src/public-api';
import { NG_VALUE_ACCESSOR } from '@angular/forms';



@Component({
  selector: 'ui-radio-button',
  templateUrl: 'radioButtonComponent.html',
  styleUrls: ['radioButtonComponent.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => RadioButtonComponent),
      multi: true
    }
  ]
})

export class RadioButtonComponent implements OnInit {

  _value:any = '';
  obj = {};




  onChange: any = () => {}
  onTouch: any = () => {}
  val= "" // this is the updated value that the class accesses
  set value(val){  // this value is updated by programmatic changes if( val !== undefined && this.val !== val){
  this.val = val
  this.onChange(val)
  this.onTouch(val)
  }
  
  // this method sets the value programmatically
  writeValue(value: any){ 
  this.value = value
  }
  // upon UI element value changes, this method gets triggered
  registerOnChange(fn: any){
  this.onChange = fn
  }
  // upon touching the element, this method gets triggered
  registerOnTouched(fn: any){
  this.onTouch = fn
  }
  
  randomNumber = Math.random();
  
  @Input() items: Choices[];
  @Input() disabled: boolean;
  @Input() label: string;
  @Input() name: string;
  @Input() required: boolean;

  @Output() eventValue = new EventEmitter();


  constructor(
    
  ) { }

  ngOnInit() {
  }

}
