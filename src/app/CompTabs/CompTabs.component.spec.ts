/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CompTabsComponent } from './CompTabs.component';

describe('CompTabsComponent', () => {
  let component: CompTabsComponent;
  let fixture: ComponentFixture<CompTabsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompTabsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
