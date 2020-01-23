import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerSetUpChangeComponent } from './customer-set-up-change.component';

describe('CustomerSetUpChangeComponent', () => {
  let component: CustomerSetUpChangeComponent;
  let fixture: ComponentFixture<CustomerSetUpChangeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerSetUpChangeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerSetUpChangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
