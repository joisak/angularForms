import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ui-button',
  templateUrl: 'buttonComponent.html',
  styleUrls: ['buttonComponent.scss']
})
export class ButtonComponent implements OnInit {

  @Input() text: string;
  @Input() disabled: boolean;

  constructor() { }

  ngOnInit() {
  }

}
