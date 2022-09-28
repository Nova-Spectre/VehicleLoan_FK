import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-applynow',
  templateUrl: './applynow.component.html',
  styleUrls: ['./applynow.component.less']
})
export class ApplynowComponent implements OnInit {

  constructor(private router : Router) { 
    
  }

  ngOnInit()
   {
  }
  OnSubmit(){
    this.router.navigate(['/employeedetails']);
  }

}
