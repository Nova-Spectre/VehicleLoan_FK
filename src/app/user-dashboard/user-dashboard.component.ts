import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit {
  title = 'DashboardTable';

  headers = ["Loan No","Vehcile Name","Vehcile Price","Status"];

  rows = [
    {
      "Loan No" : "1",
      "Vehcile Name": "Audi A6",
      "Vehcile Price": "6700000",
      "Status": "Pending"
  },
  {
    "Loan No" : "2",
      "Vehcile Name": "Tata Safari XE",
      "Vehcile Price": "28000",
      "Status": "Approved"
  },
  {
    "Loan No" : "3",
      "Vehcile Name": "XUV 700",
      "Vehcile Price": "28000",
      "Status": "Approved"
  },
  {
    "Loan No" : "4",
      "Vehcile Name": "Tata Safari XE",
      "Vehcile Price": "28000",
      "Status": "Pending"
  }
]


  constructor() { }

  ngOnInit(): void {
  }

}
