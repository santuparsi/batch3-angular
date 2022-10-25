import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgStyleDemo1Component } from './ng-style-demo1.component';

describe('NgStyleDemo1Component', () => {
  let component: NgStyleDemo1Component;
  let fixture: ComponentFixture<NgStyleDemo1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgStyleDemo1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgStyleDemo1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
