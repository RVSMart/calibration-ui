import { Component, ErrorHandler, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Supplier } from 'src/app/model/supplier';
import { SharedService } from 'src/app/service/shared.service';

@Component({
  selector: 'app-supplier',
  templateUrl: './supplier.component.html',
  styleUrls: ['./supplier.component.css']
})
export class SupplierComponent implements OnInit {

  supplierForm : FormGroup = new FormGroup({});
  submitted = false;

  constructor(
    private fb : FormBuilder,
    private service : SharedService
  ) { }

  ngOnInit(): void {

    this.supplierForm = this.fb.group({
      supplierId:new FormControl('', [Validators.required, Validators.maxLength(100)]), 
      name:new FormControl('' , [Validators.required, Validators.maxLength(100)]), 
      address:new FormControl('' , [Validators.required, Validators.maxLength(100)]), 
      city:new FormControl('' , [Validators.required, Validators.maxLength(100)]), 
      state:new FormControl('' , [Validators.required, Validators.maxLength(100)]), 
      country:new FormControl('' , [Validators.required, Validators.maxLength(100)]), 
      zipcode:new FormControl('', [Validators.required, Validators.maxLength(100)]), 
      contactno:new FormControl('', [Validators.required, Validators.maxLength(100)]), 
      email:new FormControl('', [Validators.required, Validators.maxLength(100)]), 
      fax:new FormControl('', [Validators.required, Validators.maxLength(100)]), 
    });
  }

  get f(){     return this.supplierForm.controls;   }


  onSubmit(){
    if ( this.supplierForm.invalid){
      this.submitted = false;
      return;
    }


    this.submitted = true;
    let supplier = new Supplier(
      this.supplierForm.get('supplierId')?.value,
      this.supplierForm.get('name')?.value,
      this.supplierForm.get('address')?.value,
      this.supplierForm.get('city')?.value,
      this.supplierForm.get('state')?.value,
      this.supplierForm.get('country')?.value,
      this.supplierForm.get('zipcode')?.value,
      this.supplierForm.get('contactno')?.value,
      this.supplierForm.get('email')?.value,
      this.supplierForm.get('fax')?.value,

    );

    this.submitted = true;
    this.service.saveSupplier(supplier).subscribe(
      (data) => {
        console.log(data);
      },
      (error : ErrorHandler) => {
        console.log(error);
      }
    );



  }

  onReset(){this.submitted = false; this.supplierForm.reset();}

}
