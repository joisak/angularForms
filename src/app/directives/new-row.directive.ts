import { Directive, Input, HostBinding } from '@angular/core';

@Directive({
  selector: '[row]'
})
export class NewRowDirective {
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
      this._elementClass.push('row');

  }


}
