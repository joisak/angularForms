import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cool-form',
  templateUrl: './cool-form.component.html',
  styleUrls: ['./cool-form.component.scss']
})
export class CoolFormComponent implements OnInit {

  constructor() { }

  submit(x, y) {
    console.log(x, y );
  }

  ngOnInit() {
  }

}
