import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerSetUpCIELChangeComponent } from './customer-set-up-cielchange.component';

describe('CustomerSetUpCIELChangeComponent', () => {
  let component: CustomerSetUpCIELChangeComponent;
  let fixture: ComponentFixture<CustomerSetUpCIELChangeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerSetUpCIELChangeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerSetUpCIELChangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
