import { Component, OnInit, AfterViewInit } from '@angular/core';
import { HttpClient,  } from '@angular/common/http';


export function submitForm(x) {
  console.log(x.form.value);
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent implements OnInit, AfterViewInit {
 
  constructor(private http: HttpClient) {
  }



  ngAfterViewInit() {
  }

  ngOnInit() {
  }
}
