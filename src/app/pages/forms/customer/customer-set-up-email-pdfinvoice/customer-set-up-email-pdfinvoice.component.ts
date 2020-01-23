import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/common.service';

@Component({
  selector: 'app-customer-set-up-email-pdfinvoice',
  templateUrl: './customer-set-up-email-pdfinvoice.component.html',
  styleUrls: ['./customer-set-up-email-pdfinvoice.component.scss']
})
export class CustomerSetUpEmailPDFInvoiceComponent implements OnInit {

  constructor(private commonService : CommonService) { }

  ngOnInit() {
  }

  formName = 'Ändring eller nyupplägg av PDF';

  onSubmit(data) {
    let form = data.form.value;
    this.commonService.postForm(form);
  }

}
