import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/common.service';


@Component({
  selector: 'app-customer-change-address',
  templateUrl: './customer-change-address.component.html',
  styleUrls: ['./customer-change-address.component.scss']
})
export class CustomerChangeAddressComponent implements OnInit {

  constructor(private commonService: CommonService) {
  }

  formName = 'Ändring av adress';

  onSubmit(x) {
    let form = x.form.value;
    console.log(form);
    this.commonService.postForm(form);
  }

  ngOnInit() {

  }

}
