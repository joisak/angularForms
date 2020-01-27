import { Directive, Input, HostBinding } from '@angular/core';

@Directive({
  selector: '[halfInput]'
})
export class InputSectionDirective {

  protected _elementClass: string[] = [];

@Input('class')
@HostBinding('class')

  get elementClass(): string {
      return this._elementClass.join(' ');
  }
  set(val: string) {
      this._elementClass = val.split(' ');
  }

  constructor() {
      //this._elementClass.push('form-group');
      this._elementClass.push('col-md-6');
  }

}
