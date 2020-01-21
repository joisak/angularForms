import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer-set-up-company-internal-schenker',
  templateUrl: './customer-set-up-company-internal-schenker.component.html',
  styleUrls: ['./customer-set-up-company-internal-schenker.component.scss']
})
export class CustomerSetUpCompanyInternalSchenkerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  formName = 'Kundupplägg - bolagsinterna Schenker AB';

  onSubmit(x) {
    console.log(x.form.value);
  }


}
