import { Component, OnInit, Input, Output, EventEmitter, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'ui-select',
  templateUrl: 'selectComponent.html', 
  styleUrls: ['selectComponent.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SelectComponent),
      multi: true
    }
  ]
})
export class SelectComponent implements OnInit {

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
  

  selected: any;

  _value:string = ''; 
  obj = {};

  @Input() items: string[];
  @Input() disabled: boolean;
  @Input() placeholder: string;
  @Input() label: string;
  @Input() for: string;
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
  
  getSelected(selected: any) {
    console.log('The Selected One is: ', selected);
  }

  constructor() { }

  ngOnInit() {
  }

}
