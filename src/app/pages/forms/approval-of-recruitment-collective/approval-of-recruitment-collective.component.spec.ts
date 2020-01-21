import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApprovalOfRecruitmentCollectiveComponent } from './approval-of-recruitment-collective.component';

describe('ApprovalOfRecruitmentCollectiveComponent', () => {
  let component: ApprovalOfRecruitmentCollectiveComponent;
  let fixture: ComponentFixture<ApprovalOfRecruitmentCollectiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApprovalOfRecruitmentCollectiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApprovalOfRecruitmentCollectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
