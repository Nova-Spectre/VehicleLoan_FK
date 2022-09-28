import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { FormsModule } from '@angular/forms';
import { EmiComponent } from './emi/emi.component';
import { LoginComponent } from './login/login.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { UserComponent } from './user/user.component';
import { ApplynowComponent } from './applynow/applynow.component';
import { IdentitydetailsComponent } from './identitydetails/identitydetails.component';
import { loanapplyComponent } from './loanapply/loanapply.component';
import { LoandetailsComponent } from './loandetails/loandetails.component';
import { LoanofferComponent } from './loanoffer/loanoffer.component';
import { SchedulerComponent } from './scheduler/scheduler.component';
import { VehicledetailsComponent } from './vehicledetails/vehicledetails.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminComponent,
    EmiComponent,
    AboutusComponent,
    UserComponent,
    ApplynowComponent,
    IdentitydetailsComponent,
    loanapplyComponent,
    LoandetailsComponent,
    LoanofferComponent,
    SchedulerComponent,
    VehicledetailsComponent,
    loanapplyComponent,
    UserDashboardComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
