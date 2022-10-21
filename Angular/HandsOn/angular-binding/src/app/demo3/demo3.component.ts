import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo3',
  templateUrl: './demo3.component.html',
  styleUrls: ['./demo3.component.css']
})
export class Demo3Component implements OnInit {
title:string='property binding is bind to element attributes';
url:string='http://www.google.co.in'
img_path='../../assets/img.jpg';
h:number=300;
w:number=300;
  constructor() { }

  ngOnInit(): void {
  }

}
