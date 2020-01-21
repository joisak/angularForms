import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer-set-up-globus',
  templateUrl: './customer-set-up-globus.component.html',
  styleUrls: ['./customer-set-up-globus.component.scss']
})
export class CustomerSetUpGlobusComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  formName = 'Kundupplägg - Globus';

  onSubmit(x) {
    let keys = Object.keys(x.form.value);
    console.log(x.form.value);
    console.log('Length: ', keys);
  }


}
