import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/common.service';

@Component({
  selector: 'app-customer-set-up-cielchange',
  templateUrl: './customer-set-up-cielchange.component.html',
  styleUrls: ['./customer-set-up-cielchange.component.scss']
})
export class CustomerSetUpCIELChangeComponent implements OnInit {

  constructor(private commonService: CommonService) { }

  ngOnInit() {
  }

  formName = 'Ändring i Ciel';

  onSubmit(x) {
    let form = x.form.value;
    console.log(form);
    this.commonService.postForm(form);
  }

}
