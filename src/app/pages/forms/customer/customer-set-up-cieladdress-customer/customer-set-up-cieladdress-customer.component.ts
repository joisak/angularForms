import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer-set-up-cieladdress-customer',
  templateUrl: './customer-set-up-cieladdress-customer.component.html',
  styleUrls: ['./customer-set-up-cieladdress-customer.component.scss']
})
export class CustomerSetUpCIELAddressCustomerComponent implements OnInit {

  constructor() { }

  formName = 'Nyupplägg av kund i Ciel - Adresskund';

  onSubmit(x) {
    console.log(x.form.value);
  }


  ngOnInit() {
  }

}
