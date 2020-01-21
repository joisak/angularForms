import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApprovalOfRecruitmentComponent } from './approval-of-recruitment.component';

describe('ApprovalOfRecruitmentComponent', () => {
  let component: ApprovalOfRecruitmentComponent;
  let fixture: ComponentFixture<ApprovalOfRecruitmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApprovalOfRecruitmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApprovalOfRecruitmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
