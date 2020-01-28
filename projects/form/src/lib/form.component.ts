import { Component, OnInit, Input } from '@angular/core';
import { CommonService } from 'src/app/common.service';

@Component({
  selector: 'ui-form',
  templateUrl: './FormComponent.html',
  styles: []
})
export class FormComponent implements OnInit {

  @Input() label: string;
  @Input() formName: string;
  disabled = false;
  formData = {};

  constructor(private commonService: CommonService) { }

  setValue(input) {
    for (var i = 0; i < input.length; i++) {
      if(input[i].type == 'radio') {
        input[i].checked ? this.formData[input[i].name] = input[i].value : '';
      }else if(input[i].type == 'checkbox') {
        input[i].checked ? this.formData[input[i].name] = true :  this.formData[input[i].name] = false;
      }
      else {
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

    this.commonService.postForm(this.formData).subscribe(
      results => {
        console.log('Success', results);
        this.disabled = true;
      },
      error => {
        console.log('Error: ', error);
      }
    )
  }

  ngOnInit() {
  }

}
