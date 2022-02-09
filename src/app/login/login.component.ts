import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Signindata } from '../model/signindata';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm : FormGroup = new FormGroup({});

  submitted = false;

  retVlue : any = false;

  constructor(
    private service : AuthService,
    private fb : FormBuilder
  ) { }

  ngOnInit(): void {

    this.loginForm = this.fb.group({
      username : new FormControl('', [Validators.required, Validators.maxLength(20)]),
      password : new FormControl('', [Validators.required, Validators.maxLength(20)])
    });
  }




  onSubmit(){


    console.log(this.loginForm.value);

    const signIn = new Signindata(this.loginForm.get('username')?.value, this.loginForm.get('password')?.value);

    this.service.authenticate(signIn).subscribe(
      (data) => {
        this.retVlue = data;
        console.log(data);
      },
      (error) => {
        console.log(error);
      }
    );

  }





  

}
