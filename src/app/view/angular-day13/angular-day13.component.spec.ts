import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularDay11Component } from './angular-day11.component';

describe('AngularDay11Component', () => {
  let component: AngularDay11Component;
  let fixture: ComponentFixture<AngularDay11Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AngularDay11Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularDay11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
