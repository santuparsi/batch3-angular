import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-class-demo1',
  templateUrl: './ng-class-demo1.component.html',
  styleUrls: ['./ng-class-demo1.component.css']
})
export class NgClassDemo1Component implements OnInit {
toggle=false;
  constructor() { }

  ngOnInit() {
  }
  setToggle()
  {
    this.toggle=!this.toggle;
  }

}
