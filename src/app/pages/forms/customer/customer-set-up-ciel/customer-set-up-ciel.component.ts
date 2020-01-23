import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/common.service';

@Component({
  selector: 'app-customer-set-up-ciel',
  templateUrl: './customer-set-up-ciel.component.html',
  styleUrls: ['./customer-set-up-ciel.component.scss']
})
export class CustomerSetUpCIELComponent implements OnInit {

  constructor(private commonService: CommonService) { }

  formName = 'Nyupplägg av kund i Ciel';

  onSubmit(x) {
    let form = x.form.value;
    console.log(form);
    this.commonService.postForm(form);
  }


  ngOnInit() {
  }

}
