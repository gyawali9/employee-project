import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeDashComponent } from './employee-dash/employee-dash.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { TrashComponent } from './trash/trash.component';

const routes: Routes = [
  {
    path:'', redirectTo:'login', pathMatch: 'full'
  },
  {
    path: 'login', component:LoginComponent
  }, 
  {
    path: 'signup', component:SignupComponent
  },
  {
    path: 'employeedash', component:EmployeeDashComponent
  },
  {
    path: 'trash', component:TrashComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
