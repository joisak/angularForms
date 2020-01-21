import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerSetUpCompanyInternalSchenkerComponent } from './customer-set-up-company-internal-schenker.component';

describe('CustomerSetUpCompanyInternalSchenkerComponent', () => {
  let component: CustomerSetUpCompanyInternalSchenkerComponent;
  let fixture: ComponentFixture<CustomerSetUpCompanyInternalSchenkerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerSetUpCompanyInternalSchenkerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerSetUpCompanyInternalSchenkerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
