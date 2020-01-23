import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer-set-up-pallet-customer',
  templateUrl: './customer-set-up-pallet-customer.component.html',
  styleUrls: ['./customer-set-up-pallet-customer.component.scss']
})
export class CustomerSetUpPalletCustomerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  formName = 'Kundupplägg - pallkund';

  onSubmit(x) {
    let keys = Object.keys(x.form.value);
    console.log(x.form.value);
    console.log('Length: ', keys);
  }
}
