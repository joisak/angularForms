import { NgModule } from '@angular/core';
import { TextInputComponent } from './text-input.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [TextInputComponent],
  imports: [CommonModule, FormsModule
  ],
  exports: [TextInputComponent]
})
export class TextInputModule { }
