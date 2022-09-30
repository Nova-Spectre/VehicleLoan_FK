import { Component, OnInit } from '@angular/core';
import { Loan } from '../Loan';

@Component({
  selector: 'app-loanoffer',
  templateUrl: './loanoffer.component.html',
  styleUrls: ['./loanoffer.component.less']
})
export class LoanofferComponent implements OnInit {
  emi!: number;

  constructor() { }
  loanstatus!:string;

  loanamount:any;
  AccSalary:any;
  interest:number=7;
  tenuremonths:number=24;

  loan!:Loan;

  ngOnInit() {

  
  this.loanamount=sessionStorage.getItem('price');
  this.AccSalary=sessionStorage.getItem('employmenttypes');
  this.cal()
  }
  
  getSession(){
    
   ;
  }


  cal() {
    var outstandingAmount =
      this.loanamount/9
      Number((this.loanamount) * (this.interest/(12*100) ) * (Math.pow((1+this.interest/(12*100)),this.tenuremonths/12)))/(Math.pow((1+this.interest/(12*100)),(this.tenuremonths/12-1)));
    this.emi = outstandingAmount / this.tenuremonths;

  
    sessionStorage.setItem('loanamount',JSON.stringify(this.loanamount));
    sessionStorage.setItem('interest',JSON.stringify(this.interest));
    sessionStorage.setItem('tenuremonths',JSON.stringify(this.tenuremonths));
    sessionStorage.setItem('emi',JSON.stringify(this.emi));
  }



}
