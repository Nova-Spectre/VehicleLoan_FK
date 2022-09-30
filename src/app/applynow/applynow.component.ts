import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import Swal from 'sweetalert2';
import { Loan } from '../Loan';
import { LoanapplyService } from '../loanapply.service';
import { User } from '../User';
import { Vehicle } from '../Vehicle';

@Component({
  selector: 'app-applynow',
  templateUrl: './applynow.component.html',
  styleUrls: ['./applynow.component.less']
})
export class ApplynowComponent implements OnInit {


  user:User=new User();
  vids!:any;
  salarys!:any;
  employmentypess!: any;
  vnames!: any;
  vmodels: any;
  showroomprices!: any;
  onroadprices!: any;
  existingemis: any;
  loanamount!:any;
  interest!:any;
  tenuremonths:any;
  emi!:any;
  status!:string;


  vehicle!:any;
  
  loan!:Loan;


  
  constructor(private router : Router,private loanapplyservice:LoanapplyService) { 

  }
  

  getSessionStorage(){
  
    this.vnames=sessionStorage.getItem('vname');
    this.vmodels=sessionStorage.getItem('vmodel');
    this.showroomprices=sessionStorage.getItem('showroomprice');
    this.onroadprices=sessionStorage.getItem('onroadprice');
    this.employmentypess=sessionStorage.getItem('employmenttypes');
    this.salarys=sessionStorage.getItem('salary');
    this.existingemis=sessionStorage.getItem('existingemi'); 
    this.vids=sessionStorage.getItem('vid');
    // this.loanamount=sessionStorage.getItem('loanamount');
    // this.interest=sessionStorage.getItem('interest');
    // this.tenuremonths=sessionStorage.getItem('tenuremonths');
    // this.emi=sessionStorage.getItem('emi');
    
  }




  ngOnInit()
   {
     this.getSessionStorage();
     
     
    //  this.user.vehicle.vmodel=this.vmodels;
    //  this.user.vehicle.existingemi=this.existingemis;
    //  this.user.vehicle.employmenttypes=this.employmentypess;
    //  this.user.vehicle.showroomprice=this.showroomprices;
    //  this.user.vehicle.onroadprice=this.onroadprices;
    //  this.user.vehicle.annualsalary=this.salarys;
    //  this.user.vehicle.vid=this.vids;
   
     this.getVehicle(this.vids);

    //  this.user.vehicle=this.vehicle;
      
      console.log(this.vids);
      this.user.vid=this.vids;
      this.user.status="pending";
      this.user.vehicle=this.vehicle;
      
   
      // this.user.vehicle.loan.acctype=this.employmentypess;
      // this.user.vehicle.loan.amount=this.loanamount;
      // this.user.vehicle.loan.rate=this.interest;
      // this.user.vehicle.loan.emi=this.emi;

    
  }

  public getVehicle(vid:number){
    this.loanapplyservice.getVehicle(this.vids).subscribe((data)=>{
      this.vehicle=data;
      console.log(this.vehicle);
    })

  }

  getvehicleUser(vid:number){
    this.loanapplyservice.getVehicleUser(vid).subscribe((data)=>{
      this.vehicle=data;
      console.log(this.vehicle);
    })
  }

 

  OnSubmit(user){
    console.log(this.user)
    alert('firing')
    this.loanapplyservice.saveuser(this.user).subscribe((data)=>{
      console.log(data);
      alert('ok')
    })
    Swal.fire("Application Submitted");
    this.router.navigate(['login'])
  }

}
