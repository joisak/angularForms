import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerSetUpSchenkerCompaniesComponent } from './customer-set-up-schenker-companies.component';

describe('CustomerSetUpSchenkerCompaniesComponent', () => {
  let component: CustomerSetUpSchenkerCompaniesComponent;
  let fixture: ComponentFixture<CustomerSetUpSchenkerCompaniesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerSetUpSchenkerCompaniesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerSetUpSchenkerCompaniesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
