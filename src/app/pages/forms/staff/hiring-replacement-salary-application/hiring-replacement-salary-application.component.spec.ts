import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HiringReplacementSalaryApplicationComponent } from './hiring-replacement-salary-application.component';

describe('HiringReplacementSalaryApplicationComponent', () => {
  let component: HiringReplacementSalaryApplicationComponent;
  let fixture: ComponentFixture<HiringReplacementSalaryApplicationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HiringReplacementSalaryApplicationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HiringReplacementSalaryApplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
