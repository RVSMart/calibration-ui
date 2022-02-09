import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DepartmentComponent } from './department/department.component';
import { DeptlistComponent } from './deptlist/deptlist.component';
import { LocationComponent } from './location/location.component';
import { ManufacturerListComponent } from './manufacturer-list/manufacturer-list.component';
import { ManufacturerComponent } from './manufacturer/manufacturer.component';
import { SharedComponent } from './shared.component';
import { SupplierListComponent } from './supplier-list/supplier-list.component';
import { SupplierComponent } from './supplier/supplier.component';
import { UnitloclistComponent } from './unitloclist/unitloclist.component';

const routes: Routes = [
  
  {path: '', component: SharedComponent },
  { path : 'location', component:LocationComponent},
  { path : 'department', component:DepartmentComponent},
  { path: 'deptList', component:DeptlistComponent},
  { path: 'unitList', component: UnitloclistComponent},
  { path: 'supplier' , component: SupplierComponent},
  { path : 'supplierList' , component: SupplierListComponent},
  { path : 'manufacturer', component: ManufacturerComponent},
  { path : 'manufacturerList', component: ManufacturerListComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SharedRoutingModule { }
