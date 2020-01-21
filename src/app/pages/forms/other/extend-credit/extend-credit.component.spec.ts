import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtendCreditComponent } from './extend-credit.component';

describe('ExtendCreditComponent', () => {
  let component: ExtendCreditComponent;
  let fixture: ComponentFixture<ExtendCreditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExtendCreditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExtendCreditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
