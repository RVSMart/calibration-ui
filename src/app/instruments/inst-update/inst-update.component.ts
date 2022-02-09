import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Instruments } from 'src/app/model/instruments';
import { Intinstruments } from 'src/app/model/intinstruments';
import { InstService } from 'src/app/service/inst.service';

@Component({
  selector: 'app-inst-update',
  templateUrl: './inst-update.component.html',
  styleUrls: ['./inst-update.component.css']
})
export class InstUpdateComponent implements OnInit {

  instrument !: Intinstruments;

  constructor(
    public dialogRef : MatDialogRef<InstUpdateComponent>,
    @Inject(MAT_DIALOG_DATA) public data:Instruments,
    private service : InstService

  ) { }

  ngOnInit(): void {
    console.log('Dialog get' +  this.data.instID);
    
    console.log( "22 : " + JSON.stringify(this.data.instID));

    this.service.viewInstrumentById( JSON.stringify(this.data.instID)).subscribe( (data)  => { this.instrument = data;
    console.log("LOG " + this.instrument.name)});

  }

  closeDialog(){
    this.dialogRef.close();
  }

}
