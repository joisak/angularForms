import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/common.service';

@Component({
  selector: 'app-customer-set-up-external-foreign-customer',
  templateUrl: './customer-set-up-external-foreign-customer.component.html',
  styleUrls: ['./customer-set-up-external-foreign-customer.component.scss']
})
export class CustomerSetUpExternalForeignCustomerComponent implements OnInit {

  constructor(private commonService: CommonService) { }

  ngOnInit() {
  }

  
  formName = 'Nyupplägg Extern Utländsk Kund';

  onSubmit(data) {
    let form = data.form.value;
    this.commonService.postForm(form);
  }

}
