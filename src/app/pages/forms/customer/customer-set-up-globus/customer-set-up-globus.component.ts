import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/common.service';

@Component({
  selector: 'app-customer-set-up-globus',
  templateUrl: './customer-set-up-globus.component.html',
  styleUrls: ['./customer-set-up-globus.component.scss']
})
export class CustomerSetUpGlobusComponent implements OnInit {

  constructor(private commonService: CommonService) { }

  ngOnInit() {
  }

  formName = 'Globus';

  onSubmit(x) {
    let form = x.form.value;
    this.commonService.postForm(form);
  }


}
