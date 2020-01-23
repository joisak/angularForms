import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer-set-up-schenker-companies',
  templateUrl: './customer-set-up-schenker-companies.component.html',
  styleUrls: ['./customer-set-up-schenker-companies.component.scss']
})
export class CustomerSetUpSchenkerCompaniesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  formName = 'Kundupplägg - övriga Schenkerbolag';

  onSubmit(x) {
    let keys = Object.keys(x.form.value);
    console.log(x.form.value);
    console.log('Length: ', keys);
  }

}
