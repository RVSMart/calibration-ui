import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Intinstruments } from 'src/app/model/intinstruments';
import { InstService } from 'src/app/service/inst.service';
import { EditInstrumentComponent } from '../edit-instrument/edit-instrument.component';
import { InstUpdateComponent } from '../inst-update/inst-update.component';

@Component({
  selector: 'app-inst-list',
  templateUrl: './inst-list.component.html',
  styleUrls: ['./inst-list.component.css']
})
export class InstListComponent implements OnInit {

  displayedColumns: string[] = ['category','name','instID','mfg','model','supplier','serialNo','installedAt','department','installeddt','expiryDt','status', 'action'];
 
  instruments : Intinstruments[] = new Array();

  constructor(
    private service : InstService,
    public updateDialog : MatDialog,
    public editDialog : MatDialog
  ) { }

  ngOnInit(): void {
    this.service.getInstrumentList().subscribe(
      (data : Intinstruments[] ) => {
        this.instruments = data;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  getUpdateInstrumentDetails(instID:string){

    alert("Update " + instID);
    const _dialog = this.updateDialog.open(InstUpdateComponent, {
      data : {instID},
      width: '100%',
      disableClose: true
    });

    _dialog.afterClosed().subscribe(result => {
      console.log('this dialog was closed');

    });
    
  }

  getInstrumentDetails(instID:string){


    alert( "////" + instID);

    const _dialog = this.updateDialog.open(EditInstrumentComponent, {
      data:{instID},
      width:'100%',
      maxWidth:'400px',
      maxHeight:'700px',
      disableClose: true

    });
    
    _dialog.afterClosed().subscribe(result => {
      console.log('this dialog was closed');

    });
  }

  OpenDialog(row:Intinstruments){

   console.log('Row Clicked ' , row);
      
  }


}

