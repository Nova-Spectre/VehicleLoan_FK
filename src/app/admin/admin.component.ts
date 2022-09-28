import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
import { User } from '../User';
import { Vehicle } from '../Vehicle';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  

  user?:User[];
  auser?:User[];
  puser?:User[];

  vehicle?:Vehicle[];
  avehicle?:Vehicle[];
  pvehicle?:Vehicle[];


  
  loginService: any;
  content!: string;
  content2!: string;

  showmsg1(){
    alert("Approved")
  };

  showmsg2(){
    alert("sorry your application is rejected")
  }

  
  

  data:Array<any>
  constructor(private adminservice : AdminService ) {
    this.data=new Array<any>()
   }
  ngOnInit() {
    
  this.getUserdataFromAPi(),
  this.getApprovedUserList(),
  this.getPendingUSerList(),
  this.getVehicleData(),
  this.getApprovedVehicleList(),
  this.getPendingVehicleList()
  }
 

  getUserdataFromAPi(){
    this.adminservice.getUserData().subscribe(data=>{
      this.user=data
      console.log(data)
    })
  }

  getApprovedUserList(){
    this.adminservice.getAprovedListUser().subscribe(data=>{
      this.auser=data
      console.log(data)
    })

}
getPendingUSerList(){
  this.adminservice.getPendingListUser().subscribe(data=>{
    this.puser=data
    console.log(data)
  })

}
//

getVehicleData(){
  this.adminservice.getVehicleData().subscribe(data=>{
    this.vehicle=data
    console.log(data)
  })
}

getApprovedVehicleList(){
  this.adminservice.getAprovedListVehicle().subscribe(data=>{
    this.avehicle=data
    console.log(data)
  })

}
getPendingVehicleList(){
this.adminservice.getPendingListVehicle().subscribe(data=>{
  this.pvehicle=data
  console.log(data)
})

}

}
