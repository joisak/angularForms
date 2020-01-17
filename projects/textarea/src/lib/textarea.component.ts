import { Component, OnInit, Input, Output, EventEmitter, AfterContentInit, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'ui-textarea',
  templateUrl: 'textAreaComponent.html',
  styleUrls: ['textAreaComponent.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => TextareaComponent),
      multi: true
    }
  ]
})
export class TextareaComponent implements OnInit,AfterContentInit {

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


  _value = '';
  obj = {};
  error;

  @Input() disabled: boolean;
  @Input() placeholder: string = '';
  @Input() rows: number = 3;
  @Input() label: string;
  @Input() name: string;
  @Input() required?: boolean;
  @Input() errorMessage;

  @Output() eventValue = new EventEmitter();

  focusOutFunction(value) {
    console.log(value);
    if(this.errorMessage && !value.length) {
      this.error = true;
      
    } else {
      this.error = false;
    }
  }

  constructor() { }

  ngOnInit() {

  }

  ngAfterContentInit() {
  
  }

}
