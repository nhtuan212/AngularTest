import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularDay7Component } from './angular-day7.component';

describe('AngularDay7Component', () => {
  let component: AngularDay7Component;
  let fixture: ComponentFixture<AngularDay7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AngularDay7Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularDay7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
