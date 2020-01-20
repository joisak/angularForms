import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ui-form',
  templateUrl: './FormComponent.html',
  styles: []
})
export class FormComponent implements OnInit {

  @Input() label: string;
  formData = {};

  constructor() { }

  setValue(input) {
    for (var i = 0; i < input.length; i++) {
      if(input[i].type == 'radio') {
        if(input[i].checked) {
          this.formData[input[i].name] = input[i].value
        }
      } else {
        this.formData[input[i].name] = input[i].value;
      }
    }
  }

  submit() {
    let form = document.getElementsByTagName("form");
    let inputs = form[0].getElementsByTagName("input"),
      textarea = form[0].getElementsByTagName('textarea'),
      select = form[0].getElementsByTagName('select');

    this.setValue(inputs);
    this.setValue(textarea);
    this.setValue(select);

    console.log('FORM DATA --->', this.formData);

  }

  ngOnInit() {
  }

}
