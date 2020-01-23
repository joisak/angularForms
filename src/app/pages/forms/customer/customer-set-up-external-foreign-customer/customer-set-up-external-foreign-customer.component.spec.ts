import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerSetUpExternalForeignCustomerComponent } from './customer-set-up-external-foreign-customer.component';

describe('CustomerSetUpExternalForeignCustomerComponent', () => {
  let component: CustomerSetUpExternalForeignCustomerComponent;
  let fixture: ComponentFixture<CustomerSetUpExternalForeignCustomerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerSetUpExternalForeignCustomerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerSetUpExternalForeignCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
