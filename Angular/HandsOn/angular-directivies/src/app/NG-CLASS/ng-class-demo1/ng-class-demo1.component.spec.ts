import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgClassDemo1Component } from './ng-class-demo1.component';

describe('NgClassDemo1Component', () => {
  let component: NgClassDemo1Component;
  let fixture: ComponentFixture<NgClassDemo1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgClassDemo1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgClassDemo1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
