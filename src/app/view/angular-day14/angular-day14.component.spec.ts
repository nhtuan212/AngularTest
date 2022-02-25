import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularDay14Component } from './angular-day14.component';

describe('AngularDay14Component', () => {
  let component: AngularDay14Component;
  let fixture: ComponentFixture<AngularDay14Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AngularDay14Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularDay14Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
