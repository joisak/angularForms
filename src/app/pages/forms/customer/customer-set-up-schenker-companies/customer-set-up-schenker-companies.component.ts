import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/common.service';

@Component({
  selector: 'app-customer-set-up-schenker-companies',
  templateUrl: './customer-set-up-schenker-companies.component.html',
  styleUrls: ['./customer-set-up-schenker-companies.component.scss']
})
export class CustomerSetUpSchenkerCompaniesComponent implements OnInit {

  constructor(private commonService: CommonService) { }

  ngOnInit() {
  }

  formName = 'Nyupplägg Övriga Schenkerbolag';

  onSubmit(data) {
    let form = data.form.value;
    console.log(form);
    this.commonService.postForm(form);
  }

}
