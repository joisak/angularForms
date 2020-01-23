import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/common.service';

@Component({
  selector: 'app-customer-set-up-cieladdress-customer',
  templateUrl: './customer-set-up-cieladdress-customer.component.html',
  styleUrls: ['./customer-set-up-cieladdress-customer.component.scss']
})
export class CustomerSetUpCIELAddressCustomerComponent implements OnInit {

  constructor(private commonService: CommonService) { }

  formName = 'Nyupplägg av kund i Ciel - Adresskund';

  onSubmit(x) {
    let form = x.form.value;
    this.commonService.postForm(form);
  }

  ngOnInit() {
  }

}
