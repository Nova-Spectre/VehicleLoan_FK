import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-identitydetails',
  templateUrl: './identitydetails.component.html',
  styleUrls: ['./identitydetails.component.less']
})
export class IdentitydetailsComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit() {
  }
  OnSubmit(){
    this.router.navigate(['/login']);
  }

}
