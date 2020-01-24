import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/common.service';

@Component({
  selector: 'app-approval-of-recruitment-collective',
  templateUrl: './approval-of-recruitment-collective.component.html',
  styleUrls: ['./approval-of-recruitment-collective.component.scss']
})
export class ApprovalOfRecruitmentCollectiveComponent implements OnInit {

  constructor(private commonService: CommonService) { }

  ngOnInit() {
  }
  formName = 'Godkännande av rekrytering/inhyrning - Kollektivanställda';

  onSubmit(data) {
    let form = data.form.value;
    this.commonService.postForm(form);
  }

}
