import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { IntRole } from 'src/app/model/int-role';
import { NewRole } from 'src/app/model/new-role';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-new-role',
  templateUrl: './new-role.component.html',
  styleUrls: ['./new-role.component.css']
})
export class NewRoleComponent implements OnInit {

  roleForm : FormGroup = new FormGroup({});

  isSubmit = false;

 retRole !: IntRole;
  

  constructor(
    private service: AuthService,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {

    this.roleForm = this.fb.group({

      name : new FormControl('', [Validators.required, Validators.maxLength(50)])

    });

  
  }

  onSubmit(){
      
    if ( this.roleForm.invalid){
      this.isSubmit = false;
      return;
    }

    
    this.isSubmit = true;
    const roles = new NewRole(this.roleForm.get('name')?.value);
    this.service.createRole(roles).subscribe(
      (data) => {
        this.retRole = data;
      },
      (error) => {
          console.log(error)
          
      }
    );
  }

  onReset(){
    this.isSubmit = false;
    this.roleForm.reset();
  }

}
