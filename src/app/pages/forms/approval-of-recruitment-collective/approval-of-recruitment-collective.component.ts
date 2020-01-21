import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-approval-of-recruitment-collective',
  templateUrl: './approval-of-recruitment-collective.component.html',
  styleUrls: ['./approval-of-recruitment-collective.component.scss']
})
export class ApprovalOfRecruitmentCollectiveComponent implements OnInit {

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
