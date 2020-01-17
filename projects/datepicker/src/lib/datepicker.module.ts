import { NgModule } from '@angular/core';
import { DatepickerComponent } from './datepicker.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [DatepickerComponent],
  imports: [FormsModule, CommonModule
  ],
  exports: [DatepickerComponent]
})
export class DatepickerModule { }
