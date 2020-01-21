import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerSetUpPalletCustomerComponent } from './customer-set-up-pallet-customer.component';

describe('CustomerSetUpPalletCustomerComponent', () => {
  let component: CustomerSetUpPalletCustomerComponent;
  let fixture: ComponentFixture<CustomerSetUpPalletCustomerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerSetUpPalletCustomerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerSetUpPalletCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
