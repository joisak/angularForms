import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


export interface Choices {
  id: string;
  value: string;
  name: string;
  label: string;
}

@Component({
  selector: 'ui-checkbox',
  templateUrl: 'checkboxComponent.html', 
  styleUrls: ['checkboxComponent.scss']
})

export class CheckboxComponent implements OnInit {

  value: any;
  obj:any = [];

  @Input() string: [];
  @Input() disabled: boolean;
  @Input() items: Choices[];
  @Input() label: string;
  @Input() name: string;
  @Input() required: boolean;

  @Output() eventValue = new EventEmitter();

  changeValue(name, value, checked) {
    const isChecked = checked.target.checked;

    if (this.obj[name]) {
      if (isChecked) {
        this.obj[name].push(value);
      } else {
       this.obj[name] = this.obj[name].filter(e => e !== value);
      }
    } else {
      if (isChecked) {
        this.obj[name] = [value];
      }
    }

    if(checked.target.required){
      this.obj[name].push('required');
    } 

    this.obj[name] = [...new Set(this.obj[name])];

    console.log('FROM CHECKBOX',this.obj);
    this.eventValue.emit(this.obj);
  }





  getValue(value: any) {
    if(value.target.checked) {
      console.log('checkbox value: ', value.target.value);
    }
  }

  constructor() { }

  ngOnInit() {
  }

}
