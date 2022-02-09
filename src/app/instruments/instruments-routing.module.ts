import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditInstrumentComponent } from './edit-instrument/edit-instrument.component';
import { InstListComponent } from './inst-list/inst-list.component';
import { InstRegdComponent } from './inst-regd/inst-regd.component';
import { InstUpdateComponent } from './inst-update/inst-update.component';
import { InstrumentsComponent } from './instruments.component';

const routes: Routes = [
  { path: '', component: InstrumentsComponent },
  { path: 'saveInstrument', component:InstRegdComponent},
  { path: 'edit/:instId' , component: EditInstrumentComponent},
  { path: 'instList', component: InstListComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InstrumentsRoutingModule { }
