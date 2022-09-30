import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { User } from '../User';
import { UserloginService } from '../userlogin.service';

@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.css']
})
export class UserloginComponent implements OnInit {
  users!:User[]
  loginobj:User = new User;
  checkobj!:any;
  //declaring properties
  u_email! : string;
  password! : string;
  i : any;
  invalidLoginCustomer = false;
  constructor(private userloginservice:UserloginService , private router:Router) { }

  ngOnInit(): void {
  }
  login()
  {
    alert("Inside function")
    alert(this.loginobj.u_email)
    this.userloginservice.validateUser(this.loginobj.u_email).subscribe(
      
       data=>{
        alert("I am inside dash")
        for (this.i = 0; this.i < data.length; this.i++) {
          this.checkobj = data[this.i]; 
        if(this.checkobj[this.i].password == this.loginobj.password){
          // sessionStorage.setItem('mailID', this.loginobj.u_email.toString()),
          this.invalidLoginCustomer=false;
          alert("loginsuccessful")
          this.router.navigate(['user-dashboard']);
        }
        else{
          this.router.navigate(['user-dashboard']);
          alert("login failed")
        }
        }
      }
    )
  }
}