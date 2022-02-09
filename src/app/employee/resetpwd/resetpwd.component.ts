import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { IntPwd } from 'src/app/model/int-pwd';
import { RestPwd } from 'src/app/model/rest-pwd';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-resetpwd',
  templateUrl: './resetpwd.component.html',
  styleUrls: ['./resetpwd.component.css']
})
export class ResetpwdComponent implements OnInit {

  pwdForm : FormGroup = new FormGroup({});

  isSubmitted = false;

  intPwd !: IntPwd ;
  constructor(
    private service : AuthService,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {

    this.pwdForm = this.fb.group({

      username : new FormControl('', [Validators.required, Validators.maxLength(20)]),
      password : new FormControl('', [Validators.required, Validators.maxLength(20)]),
      confirm_password: new FormControl('', [Validators.required,Validators.maxLength(20)]),
      validator: ConfirmedValidator('password', 'confirm_password')
    });

  
  }

  onSubmit() : boolean{
    
    console.log(this.pwdForm.get('username')?.value);
    console.log(this.pwdForm.get('password')?.value);

    if( this.pwdForm.invalid){
      console.log('invalid form');
      this.isSubmitted = false;
      return false;
    }

    console.log("valid");
    this.isSubmitted = true;
    let pwd = new RestPwd( this.pwdForm.get('username')?.value , this.pwdForm.get('password')?.value);
    this.service.createPwd( pwd).subscribe(
      (data:IntPwd) => {
        console.log(data)
      },
      (error:Error) => {
        console.log(error)
      }
    );
    
        // display form values on success
        alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.pwdForm.value, null, 4));
    return true;
  }
 
  onReset(){
    this.pwdForm.reset();
  }
    
}


function ConfirmedValidator(controlName: string, matchingControlName: string){
  return (formGroup: FormGroup) => {
      const control = formGroup.controls[controlName];
      const matchingControl = formGroup.controls[matchingControlName];
      if (matchingControl.errors && !matchingControl.errors.confirmedValidator) {
          return;
      }
      if (control.value !== matchingControl.value) {
          matchingControl.setErrors({ confirmedValidator: true });
      } else {
          matchingControl.setErrors(null);
      }
  }
}