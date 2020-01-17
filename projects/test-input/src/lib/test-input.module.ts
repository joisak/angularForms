import { NgModule } from '@angular/core';
import { TestInputComponent } from './test-input.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [TestInputComponent],
  imports: [
    FormsModule, CommonModule
  ],
  exports: [TestInputComponent]
})
export class TestInputModule { }
