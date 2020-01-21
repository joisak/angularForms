import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer-set-up-email-pdfinvoice',
  templateUrl: './customer-set-up-email-pdfinvoice.component.html',
  styleUrls: ['./customer-set-up-email-pdfinvoice.component.scss']
})
export class CustomerSetUpEmailPDFInvoiceComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  formName = 'Kundupplägg - mail PDF-faktura';

  onSubmit(x) {
    console.log(x.form.value);
  }



}
