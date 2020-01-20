import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { TextInputModule } from 'projects/text-input/src/lib/text-input.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormModule } from 'projects/form/src/public-api';
import { TextareaModule } from 'projects/textarea/src/public-api';
import { DatepickerModule } from 'projects/datepicker/src/public-api';
import { RadioButtonModule } from 'projects/radio-button/src/public-api';
import { CheckboxModule } from 'projects/checkbox/src/public-api';
import { SelectModule } from 'projects/select/src/public-api';
import { FormExampleComponent } from './form-example/form-example.component';
import { CommonService } from './common.service';
import { CoolFormComponent } from './cool-form/cool-form.component';
import { TestInputComponent, TestInputModule } from 'projects/test-input/src/public-api';
import { HalfFormgroupDirective } from './half-formgroup.directive';
import { NewRowDirective } from './new-row.directive';
import { FormSectionDirective } from './form-section.directive';
import { FormSectionRowDirective } from './form-section-row.directive';
import { InputSectionDirective } from './input-section.directive';
import { TopHeaderDirective } from './top-header.directive';


const appRoutes = [
  { 
    path: '', component: AppComponent 
  },
  { 
    path: 'example', component: FormExampleComponent
  },
  { 
    path: 'cool', component: CoolFormComponent
  },
  {
    path: '**', component: AppComponent
  }
];



@NgModule({
  declarations: [
    AppComponent,
    FormExampleComponent,
    CoolFormComponent,
    HalfFormgroupDirective,
    NewRowDirective,
    FormSectionDirective,
    FormSectionRowDirective,
    InputSectionDirective,
    TopHeaderDirective,
    
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      {
        // Hide the routes message in console : default true
        enableTracing: false,
      }
    ),
    BrowserModule,
    HttpClientModule,
    TextInputModule,
    FormsModule,
    ReactiveFormsModule,
    FormModule,
    TextareaModule,
    DatepickerModule,
    RadioButtonModule,
    CheckboxModule,
    SelectModule,
    TestInputModule
    
    
  ],
  providers: [CommonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
