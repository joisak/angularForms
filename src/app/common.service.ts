import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor() { }

  valueEventHandler($event, obj) {
    Object.assign( obj, $event);
    console.log(obj);
  }

  onSubmit(x, obj) {
    console.log(x);
    console.log('Values');
    console.log('JUST SNYGGT --->, ', obj);
  }

}
