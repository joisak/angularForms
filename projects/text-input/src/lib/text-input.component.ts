import {
  AfterContentInit,
  Component,
  EventEmitter,
  forwardRef,
  Input,
  Output
} from "@angular/core";
import { NG_VALUE_ACCESSOR } from "@angular/forms";

@Component({
  selector: "ui-text-input",
  templateUrl: "textInputComponent.html",
  styleUrls: ["textInputComponent.scss"],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => TextInputComponent),
      multi: true
    }
  ]
})
export class TextInputComponent implements AfterContentInit {
  constructor() {}

  onChange: any = () => {};
  onTouch: any = () => {};
  val = ""; // this is the updated value that the class accesses
  set value(val) {
    // this value is updated by programmatic changes if( val !== undefined && this.val !== val){
    this.val = val;
    this.onChange(val);
    this.onTouch(val);
  }

  // this method sets the value programmatically
  writeValue(value: any) {
    this.value = value;
  }
  // upon UI element value changes, this method gets triggered
  registerOnChange(fn: any) {
    this.onChange = fn;
  }
  // upon touching the element, this method gets triggered
  registerOnTouched(fn: any) {
    this.onTouch = fn;
  }

  _value: string = "";
  obj = {};
  error;
  testValue;

  @Input() label: string;
  @Input() name: string;
  @Input() type: string;
  @Input() required: boolean;
  @Input() errorMessage;

  @Output() eventValue = new EventEmitter();

  /*  changeValue(name, event?) {
    if(event.target.required){
      this.obj[name]= [this.value, 'required'];
    } else {
      this.obj[name] = this.value;
    }
   
    this.eventValue.emit(this.obj);
  } */

  focusOutFunction(value) {
    if (this.errorMessage && !value.length) {
      this.error = true;
    } else {
      this.error = false;
    }
  }

  showValue(value) {

  }

  ngAfterContentInit() {}
}
