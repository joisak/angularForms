import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerSetUpCIELAddressCustomerComponent } from './customer-set-up-cieladdress-customer.component';

describe('CustomerSetUpCIELAddressCustomerComponent', () => {
  let component: CustomerSetUpCIELAddressCustomerComponent;
  let fixture: ComponentFixture<CustomerSetUpCIELAddressCustomerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerSetUpCIELAddressCustomerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerSetUpCIELAddressCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
