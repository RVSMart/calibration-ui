import { DatePipe } from '@angular/common';
import { Component, ErrorHandler, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Employee } from 'src/app/model/employee';
import { IntRole } from 'src/app/model/int-role';
import { Intdept } from 'src/app/model/intdept';
import { Intunitlocation } from 'src/app/model/intunitlocation';
import Validation from 'src/app/model/validation';
import { AuthService } from 'src/app/service/auth.service';
import { SharedService } from 'src/app/service/shared.service';

@Component({
  selector: 'app-regdemp',
  templateUrl: './regdemp.component.html',
  styleUrls: ['./regdemp.component.css']
})
export class RegdempComponent implements OnInit {

  empForm : FormGroup = new FormGroup({});
  submitted = false;
  deptList: Intdept[] = new Array();
  locList : Intunitlocation[] = new Array();

  emp !: Employee;
  roleList : IntRole[] = new Array();

  currentDate = Date.now();

  constructor(
    private fb : FormBuilder,
    private service : AuthService,
    private deptservice : SharedService
    ,private dataPipe: DatePipe
  ) { 
   
  }

  ngOnInit(): void {


    
    console.log(new Date().toDateString());
    
    let fromDate = this.dataPipe.transform(this.currentDate, 'yyyy-MM-dd');

    console.log(fromDate);

    this.deptservice.getListDept().subscribe( (data:Intdept[])=> {
      this.deptList = data;
      console.log(this.deptList);
    },
    (error: Error) => {
      console.log(error);
    } 
    
    );


    this.deptservice.getAllUnitLocationList().subscribe( (data:Intunitlocation[]) => {
      this.locList = data;
      console.log(this.locList);
    },
    (error:ErrorEvent) => {
      console.log(error);
    });


    this.service.roleList().subscribe( (data:IntRole[]) => { this.roleList = data;},
    (error: ErrorHandler) => console.log(error)
    );

    let emailregex: RegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

    this.empForm =  this.fb.group({
      userid: new FormControl('' , [Validators.required, Validators.maxLength(20)]),
      firstname: new FormControl('', [Validators.required, Validators.maxLength(100)]),
      lastname: new FormControl('' , [Validators.required, Validators.maxLength(50)]),
      middlename: new FormControl('', [Validators.required, Validators.maxLength(100)]), /* This is the System Date*/
      joiningDate: new FormControl(fromDate, [Validators.required]),
      leadid: new FormControl('abcdef', [Validators.required, Validators.maxLength(200)]), /* Comes from jwt token */
      roleid: new FormControl('', [Validators.required]),
      departmentId: new FormControl('', [Validators.required]),
      locationId: new FormControl('', [Validators.required]),
      completeDate: new FormControl('9999-12-31' ), /* max date */
      mobile: new FormControl('' , [Validators.required, Validators.maxLength(12)]),
      email: new FormControl('', [Validators.required, Validators.maxLength(100), Validators.pattern(emailregex)]),
      active: new FormControl(true, [Validators.required]), /* active: registration time */
    });

  }

    // convenience getter for easy access to form fields
    get f() { return this.empForm.controls; }

  onSave(){

      if ( this.empForm.invalid){
        this.empForm.reset();
        return;
      }

      this.submitted = true;
      let newEmp = new Employee(
        this.empForm.get('userid')?.value,
        this.empForm.get('firstname')?.value,
        this.empForm.get('lastname')?.value,
        this.empForm.get('middlename')?.value,
        this.empForm.get('joiningDate')?.value,
        this.empForm.get('leadid')?.value,
        this.empForm.get('roleid')?.value,
        this.empForm.get('completeDate')?.value,
        this.empForm.get('mobile')?.value,
        this.empForm.get('email')?.value,
        this.empForm.get('active')?.value,
        this.empForm.get('departmentId')?.value,
        this.empForm.get('locationId')?.value
      );
          
          console.log(newEmp);

        this.service.saveEmplyee(newEmp).subscribe( (data:Employee) => {
          this.emp = data;
        },
        (error:ErrorHandler) => {
          console.log(error);
        }
        );

  }

  onReset(){
    this.empForm.reset();
  }

}
