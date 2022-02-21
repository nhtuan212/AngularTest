import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularDay9Component } from './angular-day9.component';

describe('AngularDay9Component', () => {
  let component: AngularDay9Component;
  let fixture: ComponentFixture<AngularDay9Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AngularDay9Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularDay9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
