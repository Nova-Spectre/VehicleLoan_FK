import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import Swal from 'sweetalert2';
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

 
 








vehiclehtml:Vehicle=new Vehicle();



salary!:number;
age!:number;

showmsg2(status:string){
  Swal.fire(status);
}
status!:string;



 

constructor(private loanapplyservice:LoanapplyService,private router:Router) {
   
}
  ngOnInit(): void {
    
    
  }



SavesessionStorage(){
  sessionStorage.setItem('vname',JSON.stringify(this.vehiclehtml.vname));
  sessionStorage.setItem('vmodel',JSON.stringify(this.vehiclehtml.vmodel));
  sessionStorage.setItem('price',JSON.stringify(this.vehiclehtml.showroomprice));
  sessionStorage.setItem('employmenttypes',JSON.stringify(this.vehiclehtml.employmenttypes));
  sessionStorage.setItem('annualsalary',JSON.stringify(this.vehiclehtml.annualsalary));
  sessionStorage.setItem('existingemi',JSON.stringify(this.vehiclehtml.existingemi)); 
  sessionStorage.setItem('vid',JSON.stringify(this.vehiclehtml.vid));
}

SubmitForm(){

}


// Save(){
//   console.log(this.user)
//   this.SavesessionStorage();
// }
  onPostCreateUser(vehiclehtml): void {
    console.log(this.vehiclehtml);
    this.vehiclehtml.vid=1652;
    this.loanapplyservice.saveVehicle(this.vehiclehtml).subscribe((data)=>{
      console.log(data);
    })
    this.SavesessionStorage();
    this.router.navigate(['loanoffer']);
    
    // this.Eligibility(Event);
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
  console.log(event);
  // var salary = event.target.elements[0].value;
  // var age = event.target.elements[1].value;

  if(this.vehiclehtml.annualsalary>20000){
    this.showmsg2("You are eligible");
    this.status="Set1";
    sessionStorage.setItem('elistatus',this.status);
    this.onPostCreateUser(this.vehiclehtml);
    
  }
  else if(this.vehiclehtml.annualsalary<10000){
    this.showmsg2("You are Not eligible");
    this.status="Set1";
    this.router.navigate(['login']);;
    
  }


 }

 

  onSubmit() {

    
  }

}