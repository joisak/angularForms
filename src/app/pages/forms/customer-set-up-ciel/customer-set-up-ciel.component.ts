import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer-set-up-ciel',
  templateUrl: './customer-set-up-ciel.component.html',
  styleUrls: ['./customer-set-up-ciel.component.scss']
})
export class CustomerSetUpCIELComponent implements OnInit {

  constructor() { }

  formName = 'Nyupplägg av kund i Ciel';

  onSubmit(x) {
    console.log(x.form.value);
  }


  ngOnInit() {
  }

}
