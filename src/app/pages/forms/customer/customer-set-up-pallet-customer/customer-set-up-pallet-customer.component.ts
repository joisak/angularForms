import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/common.service';

@Component({
  selector: 'app-customer-set-up-pallet-customer',
  templateUrl: './customer-set-up-pallet-customer.component.html',
  styleUrls: ['./customer-set-up-pallet-customer.component.scss']
})
export class CustomerSetUpPalletCustomerComponent implements OnInit {

  constructor(private commonService: CommonService) { }

  ngOnInit() {
  }

  formName = 'Ny pallkund';

  onSubmit(data) {
    let form = data.form.value;
    this.commonService.postForm(form);
  }
}
