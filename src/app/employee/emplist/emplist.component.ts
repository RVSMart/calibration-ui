import { Component, ErrorHandler, OnInit } from '@angular/core';
import { Intemployee } from 'src/app/model/intemployee';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-emplist',
  templateUrl: './emplist.component.html',
  styleUrls: ['./emplist.component.css']
})
export class EmplistComponent implements OnInit {


  displayedColumns: string[] = ['userid','firstname','lastname','middlename','joiningDate','leadid','roleid','completeDate','mobile','email','active','departmentId','locationId', 'action'];

  empList: Intemployee[] = new Array();

  constructor(
    private service: AuthService
  ) { }

  ngOnInit(): void {

    this.service.getAllEmployee().subscribe( (data:Intemployee[]) => {
      this.empList = data;
    },

    (error:ErrorHandler) => console.log(error)
    );
  }


  openDialog(action: any, object:any){

    console.log(action);
    console.log(object);

  }
}
