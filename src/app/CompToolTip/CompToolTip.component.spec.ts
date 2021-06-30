/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CompToolTipComponent } from './CompToolTip.component';

describe('CompToolTipComponent', () => {
  let component: CompToolTipComponent;
  let fixture: ComponentFixture<CompToolTipComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompToolTipComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompToolTipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
