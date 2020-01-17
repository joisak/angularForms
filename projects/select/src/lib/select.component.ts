import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'ui-select',
  templateUrl: 'selectComponent.html', 
  styleUrls: ['selectComponent.scss']
})
export class SelectComponent implements OnInit {

  selected: any;

  value:string = ''; 
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
