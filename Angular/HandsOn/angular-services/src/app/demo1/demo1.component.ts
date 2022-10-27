import { Component, OnInit } from '@angular/core';
import { GreetService } from '../greet.service';

@Component({
  selector: 'app-demo1',
  templateUrl: './demo1.component.html',
  styleUrls: ['./demo1.component.css']
})
export class Demo1Component implements OnInit {

  uname:string="";
  msg:string="";
  constructor(private greetService:GreetService) { }

  ngOnInit(): void {
  }
  f()
  {
    //call service method
    this.msg=this.greetService.Greet(this.uname);

  }

}
