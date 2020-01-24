import { Directive, Input, HostBinding } from '@angular/core';

@Directive({
  selector: '[quarterInput]'
})
export class QuarterInputDirective {

  protected _elementClass: string[] = [];

  @Input('class')
  @HostBinding('class')

  get elementClass() {
    return this._elementClass.join(' ');
  }

  set(val: string) {
    this._elementClass = val.split('');
  }

  constructor() { 
    this._elementClass.push('col-md-3');
  }

}
