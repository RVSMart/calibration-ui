// import { DatePipe } from '@angular/common';
import { Component, ErrorHandler, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Instruments } from 'src/app/model/instruments';
import { InstService } from 'src/app/service/inst.service';

@Component({
  selector: 'app-inst-regd',
  templateUrl: './inst-regd.component.html',
  styleUrls: ['./inst-regd.component.css']
})
export class InstRegdComponent implements OnInit {

  instForm : FormGroup = new FormGroup({});
  submitted = false;
  currentDateTime!:any;

  constructor(
    private fb : FormBuilder,
    // public datepipe: DatePipe,
    private service: InstService
  ) { 
    // this.currentDateTime =this.datepipe.transform((new Date), 'MM/dd/yyyy');
  }

  ngOnInit(): void {
    this.instForm = this.fb.group({
      category:new FormControl(''),
      name:new FormControl(''),
      instID:new FormControl(''),
      mfg:new FormControl(''),
      model:new FormControl(''),
      supplier:new FormControl(''),
      serialNo:new FormControl(''),
      installedAt:new FormControl(''),
      department:new FormControl(''),
      installeddt:new FormControl(''),
      expiryDt:new FormControl(''),
      status:new FormControl('')
    });
  }

  // convenience getter for easy access to form fields
  get f() { return this.instForm.controls; }

  onSubmit(){
    if ( this.instForm.invalid){
      this.submitted = false;
      return ;
    }

    this.submitted = true;
    let inst = new Instruments(
      this.instForm.get('category')?.value,
      this.instForm.get('name')?.value,
      this.instForm.get('instID')?.value,
      this.instForm.get('mfg')?.value,
      this.instForm.get('model')?.value,
      this.instForm.get('supplier')?.value,
      this.instForm.get('serialNo')?.value,
      this.instForm.get('installedAt')?.value,
      this.instForm.get('department')?.value,
      this.instForm.get('installeddt')?.value,
      this.instForm.get('expiryDt')?.value,
      this.instForm.get('status')?.value,
    );

      this.submitted = true;

      this.service.saveInstrument(inst).subscribe(
        (data) => {
          console.log(data)
        },

        (error: ErrorHandler) => {
          console.log(error);
        }
      );

  }

  onReset(){
    this.submitted = false;
    this.instForm.reset();
  }
  

}
