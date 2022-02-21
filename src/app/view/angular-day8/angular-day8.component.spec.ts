import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularDay8Component } from './angular-day8.component';

describe('AngularDay8Component', () => {
  let component: AngularDay8Component;
  let fixture: ComponentFixture<AngularDay8Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AngularDay8Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularDay8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
