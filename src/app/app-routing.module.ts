import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { AdminComponent } from './admin/admin.component';
import { ApplynowComponent } from './applynow/applynow.component';
import { AuthguardGuard } from './authguard.guard';
import { EmiComponent } from './emi/emi.component';
import { IdentitydetailsComponent } from './identitydetails/identitydetails.component';
import { LoanapplyService } from './loanapply.service';
import { loanapplyComponent } from './loanapply/loanapply.component';
import { LoandetailsComponent } from './loandetails/loandetails.component';
import { LoanofferComponent } from './loanoffer/loanoffer.component';
import { LoginComponent } from './login/login.component';
import { SchedulerComponent } from './scheduler/scheduler.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { UserComponent } from './user/user.component';
import { VehicledetailsComponent } from './vehicledetails/vehicledetails.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  {path:'login',component:LoginComponent},
  { path: 'admin', component: AdminComponent , canActivate : [AuthguardGuard]},
  { path: 'emi', component: EmiComponent },
  { path: 'aboutus', component:  AboutusComponent},
  { path: 'loanapply', component: loanapplyComponent},
  { path: 'loanoffer', component: LoanofferComponent},
  { path: 'applynow', component: ApplynowComponent },
  { path: 'scheduler', component:  SchedulerComponent, canActivate : [AuthguardGuard]},
  { path: 'vehicledetails', component:  VehicledetailsComponent, canActivate : [AuthguardGuard]},
  { path: 'loandetails', component:  LoandetailsComponent, canActivate : [AuthguardGuard]},
  { path: 'identitydetails', component:  IdentitydetailsComponent, canActivate : [AuthguardGuard]},
  {path:'userdashboard',component:UserDashboardComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
