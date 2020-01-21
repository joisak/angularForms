import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer-set-up-change',
  templateUrl: './customer-set-up-change.component.html',
  styleUrls: ['./customer-set-up-change.component.scss']
})
export class CustomerSetUpChangeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  formName = 'Kundupplägg - ändring';

  onSubmit(x) {
    console.log(x.form.value);
  }


}
