import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';

const routes: Routes = [

  { path: 'authenticate' , component: LoginComponent },

  { path: 'dashboard', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule) },

  { path: 'employee', loadChildren: () => import('./employee/employee.module').then(m => m.EmployeeModule) },



  { path: 'shared', loadChildren: () => import('./shared/shared.module').then(m => m.SharedModule) },

  { path: 'instruments', loadChildren: () => import('./instruments/instruments.module').then(m => m.InstrumentsModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
