import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer-change-address',
  templateUrl: './customer-change-address.component.html',
  styleUrls: ['./customer-change-address.component.scss']
})
export class CustomerChangeAddressComponent implements OnInit {

  constructor() {

  }

  formName = 'Ändring av adress';

  onSubmit(x) {
    console.log(x.form.value);
  }

  ngOnInit() {

  }

}
