import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-style-demo1',
  templateUrl: './ng-style-demo1.component.html',
  styleUrls: ['./ng-style-demo1.component.css']
})
export class NgStyleDemo1Component implements OnInit {
toggle=false;
  constructor() { }

  ngOnInit() {
  }
  SetToggle()
  {
    this.toggle=!this.toggle;
  }

}
