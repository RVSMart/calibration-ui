import { Component, ErrorHandler, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Department } from 'src/app/model/department';
import Validation from 'src/app/model/validation';
import { SharedService } from 'src/app/service/shared.service';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit {


  departmentForm : FormGroup = new FormGroup({});
  submitted = false;

  constructor(
    private fb: FormBuilder,
    private servive : SharedService
  ) { }

  ngOnInit(): void {

    this.departmentForm = this.fb.group({
      deptid:new FormControl('', [Validators.required, Validators.maxLength(20)]),
      name:new FormControl('', [Validators.required, Validators.maxLength(100)]),
      contact:new FormControl('', [Validators.required, Validators.maxLength(20)]),
      email:new FormControl('', [Validators.required, Validators.maxLength(20)]),
      hod:new FormControl('', [Validators.required, Validators.maxLength(20)]),
      fax:new FormControl('', [Validators.required, Validators.maxLength(20)]),
    })
  }

      // convenience getter for easy access to form fields
      get f() { return this.departmentForm.controls; }


  onSubmit(){


    console.log('Department');

    if ( this.departmentForm.invalid){
      this.submitted = false;
      return;
    }
    let department = new Department(
      this.departmentForm.get('deptid')?.value,
      this.departmentForm.get('name')?.value,
      this.departmentForm.get('contact')?.value,
      this.departmentForm.get('email')?.value,
      this.departmentForm.get('hod')?.value,
      this.departmentForm.get('fax')?.value
      );

      this.submitted = true;

      this.servive.saveDepartment(department).subscribe(
        (data) => {
            console.log(data);
        },
        (error:ErrorHandler) => {
          console.log(error)
        }
      );



  }

  onReset(){ this.submitted = false; this.departmentForm.reset();}

}
