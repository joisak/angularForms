import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../../../common.service';

@Component({
  selector: 'app-hiring-replacement-salary-application',
  templateUrl: './hiring-replacement-salary-application.component.html',
  styleUrls: ['./hiring-replacement-salary-application.component.scss']
})
export class HiringReplacementSalaryApplicationComponent implements OnInit {
  serv: CommonService;
  newServ;

  constructor(private commonService: CommonService) { 
   
  }

  ngOnInit() {

  }

  formName = ' White Collar Hiring/Replacement/Salary';

  onSubmit(data) {
    let form = data.form.value;
    this.commonService.postForm(form);
  }

}
