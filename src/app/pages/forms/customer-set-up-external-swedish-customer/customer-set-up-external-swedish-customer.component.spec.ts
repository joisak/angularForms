import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerSetUpExternalSwedishCustomerComponent } from './customer-set-up-external-swedish-customer.component';

describe('CustomerSetUpExternalSwedishCustomerComponent', () => {
  let component: CustomerSetUpExternalSwedishCustomerComponent;
  let fixture: ComponentFixture<CustomerSetUpExternalSwedishCustomerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerSetUpExternalSwedishCustomerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerSetUpExternalSwedishCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
