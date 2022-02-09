import { Component, OnInit } from '@angular/core';
import { IntRole } from 'src/app/model/int-role';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-role-list',
  templateUrl: './role-list.component.html',
  styleUrls: ['./role-list.component.css']
})
export class RoleListComponent implements OnInit {

  displayedColumns: string[] = ['id', 'name'];

  irole : IntRole[] = new Array();

  constructor(
    private servive : AuthService
  ) { }

  ngOnInit(): void {

    this.servive.roleList().subscribe(
      (data:IntRole[]) => {
        this.irole = data;
      },
      (error) => {
        console.log(error)
      }
    )

  ;
  }

}
