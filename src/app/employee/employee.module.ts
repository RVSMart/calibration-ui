import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';

import { EmployeeRoutingModule } from './employee-routing.module';
import { EmployeeComponent } from './employee.component';
import { AddRoleComponent } from './add-role/add-role.component';
import { NewRoleComponent } from './new-role/new-role.component';
import { RoleListComponent } from './role-list/role-list.component';
import { EditRoleComponent } from './edit-role/edit-role.component';
import { MaterialModule } from '../material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AddempComponent } from './addemp/addemp.component';
import { ResetpwdComponent } from './resetpwd/resetpwd.component';
import { RegdempComponent } from './regdemp/regdemp.component';
import { EmplistComponent } from './emplist/emplist.component';


@NgModule({
  declarations: [
    EmployeeComponent,
    AddRoleComponent,
    NewRoleComponent,
    RoleListComponent,
    EditRoleComponent,
    AddempComponent,
    ResetpwdComponent,
    RegdempComponent,
    EmplistComponent
  ],
  imports: [
    CommonModule,
    EmployeeRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers:[DatePipe]
})
export class EmployeeModule { }
