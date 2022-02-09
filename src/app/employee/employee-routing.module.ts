import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditRoleComponent } from './edit-role/edit-role.component';
import { EmplistComponent } from './emplist/emplist.component';
import { EmployeeComponent } from './employee.component';
import { NewRoleComponent } from './new-role/new-role.component';
import { RegdempComponent } from './regdemp/regdemp.component';
import { ResetpwdComponent } from './resetpwd/resetpwd.component';
import { RoleListComponent } from './role-list/role-list.component';

const routes: Routes = [
  { path: '', component: EmployeeComponent },
  { path: 'saveRole', component:NewRoleComponent},
  { path: 'listRole', component: RoleListComponent},
  { path: 'edit', component: EditRoleComponent},
  { path : 'resetPwd' , component: ResetpwdComponent},
  { path : 'saveEmp', component: RegdempComponent},
  { path: 'empList', component: EmplistComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }
