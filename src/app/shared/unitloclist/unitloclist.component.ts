import { Component, ErrorHandler, OnInit } from '@angular/core';
import { Intunitlocation } from 'src/app/model/intunitlocation';
import { SharedService } from 'src/app/service/shared.service';

@Component({
  selector: 'app-unitloclist',
  templateUrl: './unitloclist.component.html',
  styleUrls: ['./unitloclist.component.css']
})
export class UnitloclistComponent implements OnInit {

  displayedColumns: string[] = ['name','plotno','city','state','country','pincode','contactno','email','fax'];
  unitLoc: Intunitlocation[] = new Array();

  constructor(
    private service : SharedService
  ) { }

  ngOnInit(): void {

    this.service.getAllUnitLocationList().subscribe(
      (data : Intunitlocation[] ) => {
        this.unitLoc = data;
      },
      (error : ErrorHandler) => {
        console.log(error);
      }
    );

  }

}


