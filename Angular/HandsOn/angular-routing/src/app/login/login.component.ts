import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
uname?:string;
pwd?:string;
msg?:string;
  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  Validate()
  {
    if(this.uname=="Admin" && this.pwd=='12345')
    {
      //redirect to admin-dashboard
      this.router.navigateByUrl('admin-dashboard');
    }
    else if(this.uname=="Rohan" && this.pwd=='12345')
    {
      //redirect to user-dashboard
      this.router.navigateByUrl('user-dashboard');
    }
    else
    {
      this.msg='Invalid Credentials';
    }
  }

}
