import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerSetUpGlobusComponent } from './customer-set-up-globus.component';

describe('CustomerSetUpGlobusComponent', () => {
  let component: CustomerSetUpGlobusComponent;
  let fixture: ComponentFixture<CustomerSetUpGlobusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerSetUpGlobusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerSetUpGlobusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
