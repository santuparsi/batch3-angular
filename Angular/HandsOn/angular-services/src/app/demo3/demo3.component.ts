import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user';
@Component({
  selector: 'app-demo3',
  templateUrl: './demo3.component.html',
  styleUrls: ['./demo3.component.css']
})
export class Demo3Component implements OnInit {
users?:User[];
  constructor(private userService:UserService) {
    this.userService.GetPosts().subscribe(response=>{
      this.users=response;
      console.log(this.users);
    })
   }

  ngOnInit(): void {
  }

}
