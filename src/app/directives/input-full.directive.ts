import { Directive, Input, HostBinding } from '@angular/core';

@Directive({
  selector: '[fullInput]'
})
export class InputFullDirective {

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
        this._elementClass.push('col-md-12');
    }

}
