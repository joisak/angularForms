import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer-set-up-external-foreign-customer',
  templateUrl: './customer-set-up-external-foreign-customer.component.html',
  styleUrls: ['./customer-set-up-external-foreign-customer.component.scss']
})
export class CustomerSetUpExternalForeignCustomerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  
  formName = 'Kundupplägg - extern svensk kund';

  onSubmit(x) {
    console.log(x.form.value);
  }

}
