import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer-set-up-cielchange',
  templateUrl: './customer-set-up-cielchange.component.html',
  styleUrls: ['./customer-set-up-cielchange.component.scss']
})
export class CustomerSetUpCIELChangeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }


  formName = 'Kundupplägg - CIEL ändring';

  onSubmit(x) {
    console.log(x.form.value);
  }


}
