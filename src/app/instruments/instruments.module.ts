import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InstrumentsRoutingModule } from './instruments-routing.module';
import { InstrumentsComponent } from './instruments.component';
import { InstRegdComponent } from './inst-regd/inst-regd.component';
import { InstListComponent } from './inst-list/inst-list.component';
import { InstUpdateComponent } from './inst-update/inst-update.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';
import { EditInstrumentComponent } from './edit-instrument/edit-instrument.component';
import { MAT_DIALOG_DEFAULT_OPTIONS } from '@angular/material/dialog';


@NgModule({
  declarations: [
    InstrumentsComponent,
    InstRegdComponent,
    InstListComponent,
    InstUpdateComponent,
    EditInstrumentComponent
  ],
  imports: [
    CommonModule,
    InstrumentsRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  providers: [
    {provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: false}}
  ]
})
export class InstrumentsModule { }
