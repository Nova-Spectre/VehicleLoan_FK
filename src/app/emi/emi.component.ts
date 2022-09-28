import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-emi',
  templateUrl: './emi.component.html',
  styleUrls: ['./emi.component.css']
})
export class EmiComponent implements OnInit {

  loanAmount: number = 200000;
  tenure: number = 10;
  interest: number = 5;
  emi: number = 0;
  
  cal() {
    var outstandingAmount =
      this.loanAmount/9
      Number((this.loanAmount) * (this.interest/(12*100) ) * (Math.pow((1+this.interest/(12*100)),this.tenure/12)))/(Math.pow((1+this.interest/(12*100)),(this.tenure/12-1)));
    this.emi = outstandingAmount / this.tenure;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
