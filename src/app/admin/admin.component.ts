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
  

  user!:User[];
  uss:User=new User();
  u:User=new User();

////////////
  auser!:User[];
  aus:User=new User();





  puser!:User[];
  pus:User=new User();

  /////////////
  pvehicle!:Vehicle[];

  


  
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
    
  // this.getUserdataFromAPi(),
  this.getApprovedUserList(),
  this.getPendingUSerList(),
  this.getPendingVehicleList()
  

 
 
  }
 
  getApprove(u_id:number){
    this.u.status="approved"
    this.adminservice.putUser(this.u,u_id).subscribe((data)=>{
      alert('Approved')
    })
     // this.adminservice.putUser().subscribe()
  }

  getPending(u_id:number){
    this.u.status="pending"
    this.adminservice.putUser(this.u,u_id).subscribe((data)=>{
      alert('Rejected')
    })
  }

  

  getUserdataFromAPi(){
    this.adminservice.getUserData().subscribe(data=>{
      this.user=data
      console.log(this.user);
      
    })
  }

  getApprovedUserList(){
    this.adminservice.getAprovedListUser().subscribe(data=>{
      this.auser=data;
      console.log(this.user);
      alert(this.auser)
      // this.aus=data;

      
    })

}
getPendingUSerList(){
  this.adminservice.getPendingListUser().subscribe(data=>{
    this.puser=data
    console.log(data)
  })

}
getPendingVehicleList(){
  this.adminservice.getPendingVehicleUser().subscribe(data=>{
    this.pvehicle=data
    console.log(data)
  })
}

 
// reject(vid:any){
//   if(confirm('Are you sure?')){
//     this.adminservice.reject(vid).subscribe(data=>{
//     console.log(data);
//     });
//   }
  

//



}



