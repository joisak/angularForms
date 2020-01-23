import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-approval-of-recruitment',
  templateUrl: './approval-of-recruitment.component.html',
  styleUrls: ['./approval-of-recruitment.component.scss']
})
export class ApprovalOfRecruitmentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  formName = 'Godkännande av rekrytering/inhyrning';

  onSubmit(x) {
    let keys = Object.keys(x.form.value);
    console.log(x.form.value);
    console.log('Length: ', keys);
  }


}
