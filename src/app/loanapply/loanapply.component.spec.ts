import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { loanapplyComponent } from './loanapply.component';

describe('loanapplyComponent', () => {
  let component: loanapplyComponent;
  let fixture: ComponentFixture<loanapplyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ loanapplyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(loanapplyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

