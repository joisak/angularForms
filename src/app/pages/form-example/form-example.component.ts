import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-form-example',
  templateUrl: './form-example.component.html',
  styleUrls: ['./form-example.component.scss']
})
export class FormExampleComponent implements OnInit, AfterViewInit {

  //Picking up the form in the HTML
  @ViewChild('form', { static: false }) form: ElementRef;

  constructor() {

  }

  //Needs to fetch all data in form and send it
  public obj = [];
  errors = [];
  sendingFormData:boolean = false;

  valueEventHandler($event: any) {
    Object.assign(this.obj, $event);
  }

  onSubmit() {
    console.log(this.obj);

    this.errors = [];

    Object.values(this.obj).forEach(element => {
      if (element.includes('required')) {
        if (element.includes('required') && element.includes("")) {
          this.errors.push('error');
          console.log('Element ', element);
        } 
        if (element.length === 1) {
          this.errors.push('error');
          console.log('Element ',element);
        }
      }
      console.log(this.obj);
    });

    console.log('Result --> ', this.obj);
    console.log(this.errors);
    if(!this.errors.length) {
      this.sendingFormData = true;
      console.log('Send Form --->, ', this.obj);
    }
  }

  ngAfterViewInit() {
    const form = this.form.nativeElement;
    const formNames = form.querySelectorAll('[name]');
    console.log(formNames);
    formNames.forEach(element => {
      let name = element.getAttribute("name");
      //if (element.getAttribute('required') === '') {
        if (element.getAttribute('required')) {
        this.obj[name] = ['required'];
        console.log('yes, this one!', name);
      } else {
        this.obj[name] = "";
      }
    
    });
    console.log(this.obj);
  }

  ngOnInit() {

  }

}
