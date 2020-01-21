import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerChangeAddressComponent } from './customer-change-address.component';

describe('CustomerChangeAddressComponent', () => {
  let component: CustomerChangeAddressComponent;
  let fixture: ComponentFixture<CustomerChangeAddressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerChangeAddressComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerChangeAddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
