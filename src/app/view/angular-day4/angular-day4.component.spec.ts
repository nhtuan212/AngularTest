import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularDay4Component } from './angular-day4.component';

describe('AngularDay4Component', () => {
  let component: AngularDay4Component;
  let fixture: ComponentFixture<AngularDay4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AngularDay4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularDay4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
