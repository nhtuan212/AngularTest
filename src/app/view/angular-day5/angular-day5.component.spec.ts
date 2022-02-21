import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularDay5Component } from './angular-day5.component';

describe('AngularDay5Component', () => {
  let component: AngularDay5Component;
  let fixture: ComponentFixture<AngularDay5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AngularDay5Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularDay5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
