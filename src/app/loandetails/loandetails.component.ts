import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loandetails',
  templateUrl: './loandetails.component.html',
  styleUrls: ['./loandetails.component.less']
})
export class LoandetailsComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit() {
  }
  OnSubmit(){
    this.router.navigate(['/identitydetails']);
  }
}
