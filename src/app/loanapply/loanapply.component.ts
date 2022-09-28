import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, Validators } from '@angular/forms';
import { Loan } from '../Loan';
import { LoanapplyService } from '../loanapply.service';
import { User } from '../User';
import { UserComponent } from '../user/user.component';
import { Vehicle } from '../Vehicle';


@Component({
  selector: 'app-loanapply',
  templateUrl: './loanapply.component.html',
  styleUrls: ['./loanapply.component.less']
})

export class loanapplyComponent implements OnInit {





// user!:User;

user:User=new User();

 

constructor(private loanapplyservice:LoanapplyService) { }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }




  onPostCreateUser(User): void {
    console.log(User);
    // this.loanapplyservice.saveUser(this.user)
    // .subscribe((res)=>{
    //   console.log(res)
    // })
  }

  // onPostCreateVehicle(Vehicle): void {
  //   console.log(Vehicle);
  //   this.loanapplyservice.saveVehicle(this.vehicle)
  //   .subscribe((res)=>{
  //     console.log(res)
  //   })
  // }

  // onPostCreateLoan(Loan): void {
  //   console.log(Loan);
  //   this.loanapplyservice.saveLoan(this.loan)
  //   .subscribe((res)=>{
  //     console.log(res)
  //   })
  // }


  Eligibility(event)
 {
  
  
  

 }

 

  onSubmit() {

    
  }

}