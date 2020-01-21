import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerSetUpCIELComponent } from './customer-set-up-ciel.component';

describe('CustomerSetUpCIELComponent', () => {
  let component: CustomerSetUpCIELComponent;
  let fixture: ComponentFixture<CustomerSetUpCIELComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerSetUpCIELComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerSetUpCIELComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
