import { NgModule } from '@angular/core';
import { CheckboxComponent } from './checkbox.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [CheckboxComponent],
  imports: [
    CommonModule, FormsModule
  ],
  exports: [CheckboxComponent]
})
export class CheckboxModule { }
