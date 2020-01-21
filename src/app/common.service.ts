import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor() { }

  onSubmit(x) {
    console.log(x);
    console.log('Values');
    console.log('JUST SNYGGT --->, ', x.form.value);
  }

}
