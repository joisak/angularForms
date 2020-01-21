import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hiring-replacement-salary-application',
  templateUrl: './hiring-replacement-salary-application.component.html',
  styleUrls: ['./hiring-replacement-salary-application.component.scss']
})
export class HiringReplacementSalaryApplicationComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  formName = ' White Collar Hiring/Replacement/Salary';

  onSubmit(x) {
    let keys = Object.keys(x.form.value);
    console.log(x.form.value);
    console.log('Length: ', keys);
  }
}
