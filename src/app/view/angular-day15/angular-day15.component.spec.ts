import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularDay15Component } from './angular-day15.component';

describe('AngularDay15Component', () => {
  let component: AngularDay15Component;
  let fixture: ComponentFixture<AngularDay15Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AngularDay15Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularDay15Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
