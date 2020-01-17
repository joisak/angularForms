import { NgModule } from '@angular/core';
import { RadioButtonComponent } from './radio-button.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [RadioButtonComponent],
  imports: [
    CommonModule, FormsModule
  ],
  exports: [RadioButtonComponent]
})
export class RadioButtonModule { }
