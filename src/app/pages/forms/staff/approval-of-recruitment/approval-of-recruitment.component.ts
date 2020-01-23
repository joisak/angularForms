import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/common.service';

@Component({
  selector: 'app-approval-of-recruitment',
  templateUrl: './approval-of-recruitment.component.html',
  styleUrls: ['./approval-of-recruitment.component.scss']
})
export class ApprovalOfRecruitmentComponent implements OnInit {

  constructor(private commonService: CommonService) { }

  ngOnInit() {
  }

  formName = 'Godkännande av rekrytering/inhyrning';

  onSubmit(data) {
    let form = data.form.value;
    console.log(form);
    this.commonService.postForm(form);
  }


}
