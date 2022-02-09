import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { Intinstruments } from 'src/app/model/intinstruments';
import { InstService } from 'src/app/service/inst.service';

@Component({
  selector: 'app-edit-instrument',
  templateUrl: './edit-instrument.component.html',
  styleUrls: ['./edit-instrument.component.css']
})
export class EditInstrumentComponent implements OnInit {

  instID: string  = '';
  instrument !: Intinstruments;
  instForm ?: FormGroup = new FormGroup({});

  category?:string;	
  name?:string;
  mfg?:string;
  model?:string;	
  supplier?:string;	
  serialNo?:string;
  installedAt?:string;
  department?:string;
  installeddt?:string;
  expiryDt?:string;
  status?:boolean;

  constructor(
    public dialogRef : MatDialogRef<EditInstrumentComponent>,
    @Inject(MAT_DIALOG_DATA) public data:any,
    private service : InstService,
    private activatedRouter : ActivatedRoute
  ) { }

  ngOnInit(): void {



    console.log(" ***** " +  JSON.stringify(this.data)) ;


  


    this.activatedRouter.params.subscribe( data => {
      this.instID = data.instId;
      console.log("------------" + data);
    });

 
    this.instID =  JSON.stringify(this.data.instID);

    console.log("56 : " , this.instID);



    this.service.viewInstrumentById(this.instID).subscribe(
      (data:Intinstruments) => {
        
          this.category = data.category;
          this.name  = data.name;
          this.mfg = data.mfg;
          this.model = data.model;
          this.supplier = data.supplier;
          this.serialNo = data.serialNo;
          this.installedAt = data.installedAt;
          this.department = data.department;
          this.installeddt = data.installeddt;
          this.expiryDt = data.expiryDt;
          this.status = data.status;

          console.log(this.instrument);

        //  this.preparedInstForm();
        }
      ,
      (error) => { 
        console.log(error);
      }

    );
  }
  // preparedInstForm() {
  //   this.instForm?.setValue(
     
  //   );    
  // }

  // closeDialog(){
  //   this.dialogRef.close();
  // }
}
