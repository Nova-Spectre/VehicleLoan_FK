import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit{
 
  disableLogin = false;
  constructor() { }

  ngOnInit()
  { }
  setLoginDisabled()
  {
    this.disableLogin = true;
  }

}

