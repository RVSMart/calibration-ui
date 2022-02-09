import { Component, ErrorHandler, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Unitlocation } from 'src/app/model/unitlocation';
import { SharedService } from 'src/app/service/shared.service';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit {

  locForm : FormGroup = new FormGroup({});

  submitted = false;

  constructor(
    private fb: FormBuilder,
    private servive : SharedService
  ) { }

  ngOnInit(): void {

    this.locForm = this.fb.group({
      unitId:new FormControl('', [Validators.required, Validators.maxLength(50)]),
      name:new FormControl('', [Validators.required, Validators.maxLength(100)]),
      plotno:new FormControl('', [Validators.required,Validators.maxLength(100)]),
      city:new FormControl('',[Validators.required, Validators.maxLength(100)]),
      state:new FormControl('', [Validators.required, Validators.maxLength(50)]),
      country:new FormControl('', [Validators.required, Validators.maxLength(50)]),
      pincode:new FormControl('', [Validators.required , Validators.maxLength(20)]),
      contactno:new FormControl('', [Validators.required, Validators.maxLength(20)]),
      email:new FormControl('', [Validators.required, Validators.maxLength(100)]),
      fax:new FormControl('',[Validators.required, Validators.maxLength(20)])
    });
  }

    // convenience getter for easy access to form fields
    get f() { return this.locForm.controls; }

  onSubmit(){


    console.log(this.locForm.value);

    if ( this.locForm.invalid){
      this.submitted = false;
      return;
    }
    let loc = new Unitlocation(
      this.locForm.get('unitId')?.value,
      this.locForm.get('name')?.value,
      this.locForm.get('plotno')?.value,
      this.locForm.get('city')?.value,
      this.locForm.get('state')?.value,
      this.locForm.get('country')?.value,
      this.locForm.get('pincode')?.value,
      this.locForm.get('contactno')?.value,
      this.locForm.get('email')?.value,
      this.locForm.get('fax')?.value,
    );
    this.submitted = true;
    this.servive.saveUnitLocation(loc).subscribe(
      (data) => { console.log(data);  this.locForm.reset(); },
      (error : ErrorHandler) => {
        console.log(error)
      }
    )
  }

  onReset(){
    this.submitted = false;
    this.locForm.reset();
  }

}
