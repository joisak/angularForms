import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';


@Component({
  selector: 'ui-datepicker',
  templateUrl: 'datepickerComponent.html',
  styleUrls: ['datepickerComponent.scss']
})
export class DatepickerComponent implements OnInit {

  value:any = ''; 
  obj:any = {};

  @Input() disabled:boolean;
  @Input() id: string;
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
  getValue(value: any) {
    console.log('Date picked ---> ', value);
  }

  constructor() { }

  ngOnInit() {
  }

}
