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
import { FormExampleComponent } from './pages/form-example/form-example.component';
import { CommonService } from './common.service';
import { CoolFormComponent } from './pages/cool-form/cool-form.component';
import { TestInputComponent, TestInputModule } from 'projects/test-input/src/public-api';
import { HalfFormgroupDirective } from './directives/half-formgroup.directive';
import { NewRowDirective } from './directives/new-row.directive';
import { FormSectionDirective } from './directives/form-section.directive';
import { FormSectionRowDirective } from './directives/form-section-row.directive';
import { InputSectionDirective } from './directives/input-section.directive';
import { TopHeaderDirective } from './directives/top-header.directive';
import { StartComponent } from './pages/start/start.component';
import { CustomerChangeAddressComponent } from './pages/forms/customer-change-address/customer-change-address.component';
import { CustomerSetUpChangeComponent } from './pages/forms/customer-set-up-change/customer-set-up-change.component';
import { CustomerSetUpCIELComponent } from './pages/forms/customer-set-up-ciel/customer-set-up-ciel.component';
import { CustomerSetUpCIELAddressCustomerComponent } from './pages/forms/customer-set-up-cieladdress-customer/customer-set-up-cieladdress-customer.component';
import { CustomerSetUpCIELChangeComponent } from './pages/forms/customer-set-up-cielchange/customer-set-up-cielchange.component';
import { CustomerSetUpCompanyInternalSchenkerComponent } from './pages/forms/customer-set-up-company-internal-schenker/customer-set-up-company-internal-schenker.component';


const appRoutes = [
  { 
    path: '', component: StartComponent 
  },
  { 
    path: 'customer-change-address', component: CustomerChangeAddressComponent 
  },
  { 
    path: 'customer-setup-change', component: CustomerSetUpChangeComponent
  },
  { 
    path: 'customer-setup-ciel', component: CustomerSetUpCIELComponent
  },
  { 
    path: 'customer-setup-ciel-address-customer', component: CustomerSetUpCIELAddressCustomerComponent
  },
  { 
    path: 'customer-setup-ciel-change', component: CustomerSetUpCIELChangeComponent
  },
  { 
    path: 'customer-set-up-company-internal-schenker', component: CustomerSetUpCompanyInternalSchenkerComponent
  },
  { 
    path: 'example', component: FormExampleComponent
  },
  { 
    path: 'cool', component: CoolFormComponent
  },
  {
    path: '**', component: StartComponent 
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
    StartComponent,
    CustomerChangeAddressComponent,
    CustomerSetUpChangeComponent,
    CustomerSetUpCIELComponent,
    CustomerSetUpCIELAddressCustomerComponent,
    CustomerSetUpCIELChangeComponent,
    CustomerSetUpCompanyInternalSchenkerComponent,
    
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
