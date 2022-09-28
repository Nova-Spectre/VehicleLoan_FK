import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vehicledetails',
  templateUrl: './vehicledetails.component.html',
  styleUrls: ['./vehicledetails.component.less']
})
export class VehicledetailsComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit() {
  }
  
  OnSubmit(){
    this.router.navigate(['/loandetails']);
  }

}
