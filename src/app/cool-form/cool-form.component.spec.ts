import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoolFormComponent } from './cool-form.component';

describe('CoolFormComponent', () => {
  let component: CoolFormComponent;
  let fixture: ComponentFixture<CoolFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoolFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoolFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
