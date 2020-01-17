import { Component, OnInit, Input, Output, forwardRef } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';


@Component({
  selector: 'ui-datepicker',
  templateUrl: 'datepickerComponent.html',
  styleUrls: ['datepickerComponent.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DatepickerComponent),
      multi: true
    }
  ]
})
export class DatepickerComponent implements OnInit {
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

  _value:any = ''; 
  obj:any = {};

  @Input() disabled:boolean;
  @Input() id: string;
  @Input() label: string;
  @Input() name: string;
  @Input() required: boolean;

  @Output() eventValue = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

}
