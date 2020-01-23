import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/common.service';

@Component({
  selector: 'app-customer-set-up-change',
  templateUrl: './customer-set-up-change.component.html',
  styleUrls: ['./customer-set-up-change.component.scss']
})
export class CustomerSetUpChangeComponent implements OnInit {

  constructor(private commonService: CommonService) { }

  ngOnInit() {
  }

  formName = 'Ändringar';

  onSubmit(x) {
    let form = x.form.value;
    console.log(form);
    this.commonService.postForm(form);
  }
}
