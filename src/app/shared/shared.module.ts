import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { SharedComponent } from './shared.component';
import { LocationComponent } from './location/location.component';
import { DepartmentComponent } from './department/department.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';
import { DeptlistComponent } from './deptlist/deptlist.component';
import { UnitloclistComponent } from './unitloclist/unitloclist.component';
import { SupplierComponent } from './supplier/supplier.component';
import { ManufacturerComponent } from './manufacturer/manufacturer.component';
import { ManufacturerListComponent } from './manufacturer-list/manufacturer-list.component';
import { SupplierListComponent } from './supplier-list/supplier-list.component';


@NgModule({
  declarations: [
    SharedComponent,
    LocationComponent,
    DepartmentComponent,
    DeptlistComponent,
    UnitloclistComponent,
    SupplierComponent,
    ManufacturerComponent,
    ManufacturerListComponent,
    SupplierListComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule
  ]
})
export class SharedModule { }
