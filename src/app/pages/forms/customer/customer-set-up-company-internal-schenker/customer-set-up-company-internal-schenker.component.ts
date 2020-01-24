import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/common.service';

@Component({
  selector: 'app-customer-set-up-company-internal-schenker',
  templateUrl: './customer-set-up-company-internal-schenker.component.html',
  styleUrls: ['./customer-set-up-company-internal-schenker.component.scss']
})
export class CustomerSetUpCompanyInternalSchenkerComponent implements OnInit {

  constructor(private commonService: CommonService) { }

  ngOnInit() {
  }

  formName = 'Nyupplägg Bolagsinterna Schenker AB';

  onSubmit(data) {
    let form = data.form.value;
    this.commonService.postForm(form);
  }

}
