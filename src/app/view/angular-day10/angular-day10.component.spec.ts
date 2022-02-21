import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularDay10Component } from './angular-day10.component';

describe('AngularDay10Component', () => {
  let component: AngularDay10Component;
  let fixture: ComponentFixture<AngularDay10Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AngularDay10Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularDay10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
