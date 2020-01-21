import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer-set-up-external-swedish-customer',
  templateUrl: './customer-set-up-external-swedish-customer.component.html',
  styleUrls: ['./customer-set-up-external-swedish-customer.component.scss']
})
export class CustomerSetUpExternalSwedishCustomerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  formName = 'Kundupplägg - extern utländsk kund';

  onSubmit(x) {
    let keys = Object.keys(x.form.value);
    console.log(x.form.value);
    console.log('Length: ', keys);
  }

}
