import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularDay6Component } from './angular-day6.component';

describe('AngularDay6Component', () => {
  let component: AngularDay6Component;
  let fixture: ComponentFixture<AngularDay6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AngularDay6Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularDay6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
