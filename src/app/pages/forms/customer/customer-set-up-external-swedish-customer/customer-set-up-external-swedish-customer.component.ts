import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/common.service';

@Component({
  selector: 'app-customer-set-up-external-swedish-customer',
  templateUrl: './customer-set-up-external-swedish-customer.component.html',
  styleUrls: ['./customer-set-up-external-swedish-customer.component.scss']
})
export class CustomerSetUpExternalSwedishCustomerComponent implements OnInit {

  constructor(private commonService: CommonService) { }

  ngOnInit() {
  }

  formName = 'Nyupplägg Extern Svensk Kund';

  onSubmit(data) {
    let form = data.form.value;
    this.commonService.postForm(form);
  }

}
