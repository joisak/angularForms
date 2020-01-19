import {
  Component,
  EventEmitter,
  forwardRef,
  Input,
  OnInit,
  Output
} from "@angular/core";
import { NG_VALUE_ACCESSOR } from "@angular/forms";

export interface Choices {
  name: string;
  label: string;
  id: string;
}

@Component({
  selector: "ui-checkbox",
  templateUrl: "checkboxComponent.html",
  styleUrls: ["checkboxComponent.scss"],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CheckboxComponent),
      multi: true
    }
  ]
})
export class CheckboxComponent implements OnInit {
  onChange: any = () => {};
  onTouch: any = () => {};
  val = ""; // this is the updated value that the class accesses
  set value(val) {
    // this value is updated by programmatic changes if( val !== undefined && this.val !== val){
    this.val = val;
    this.onChange(val);
    this.onTouch(val);
    console.log(this.val);
  }

  onTouchedCallback: () => {};

  propagateChange = (_: any) => {};

  // this method sets the value programmatically
  writeValue(value: any) {
    console.log(value);
    this.value = value;
  }
  // upon UI element value changes, this method gets triggered
  registerOnChange(fn: any) {
    console.log("register 1", this.value);
    this.onChange = fn;
  }
  // upon touching the element, this method gets triggered
  registerOnTouched(fn: any) {
    console.log("register 2", this.value);
    this.onTouch = fn;
  }

  onChanges(event) {
    this.checked = event.target.checked;
    this.propagateChange(event.target.checked);
  }

  _value: any;
  obj: any = [];
  checked: Boolean;

  @Input() disabled: boolean;
  @Input() label: string;
  @Input() name: string;
  @Input() required: boolean;
  @Input() checkboxLabel: string;
  @Input() id: string;

  @Output() eventValue = new EventEmitter();

  constructor() {}

  ngOnInit() {}
}
