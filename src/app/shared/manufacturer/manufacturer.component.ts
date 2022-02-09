import { Component, ErrorHandler, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { SharedService } from 'src/app/service/shared.service';
import { Manufacturer } from 'src/app/model/manufacturer'
@Component({
  selector: 'app-manufacturer',
  templateUrl: './manufacturer.component.html',
  styleUrls: ['./manufacturer.component.css']
})
export class ManufacturerComponent implements OnInit {

  manufacturerForm : FormGroup = new FormGroup({});
  submitted = false;

  constructor(
    private fb: FormBuilder,
    private service: SharedService
  ) { }

  ngOnInit(): void {

    this.manufacturerForm = this.fb.group({
      mfgId:new FormControl('', [Validators.required, Validators.maxLength(100)]), 
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

  get f() { return this.manufacturerForm.controls; }

  onSubmit() {
    if ( this.manufacturerForm.invalid){
      return;
    }

    
    this.submitted = true;
    let manufacturer = new Manufacturer(
      this.manufacturerForm.get('mfgid')?.value,
      this.manufacturerForm.get('name')?.value,
      this.manufacturerForm.get('address')?.value,
      this.manufacturerForm.get('city')?.value,
      this.manufacturerForm.get('state')?.value,
      this.manufacturerForm.get('country')?.value,
      this.manufacturerForm.get('zipcode')?.value,
      this.manufacturerForm.get('contactno')?.value,
      this.manufacturerForm.get('email')?.value,
      this.manufacturerForm.get('fax')?.value,
    );

    this.service.saveManufacturer(manufacturer).subscribe(
      (data) => {console.log(data)},
      (error:ErrorHandler) => { console.log(error);}
    );
  }

  onReset(){ this.submitted = false; this.manufacturerForm.reset();}










}
