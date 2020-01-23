import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerSetUpEmailPDFInvoiceComponent } from './customer-set-up-email-pdfinvoice.component';

describe('CustomerSetUpEmailPDFInvoiceComponent', () => {
  let component: CustomerSetUpEmailPDFInvoiceComponent;
  let fixture: ComponentFixture<CustomerSetUpEmailPDFInvoiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerSetUpEmailPDFInvoiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerSetUpEmailPDFInvoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
