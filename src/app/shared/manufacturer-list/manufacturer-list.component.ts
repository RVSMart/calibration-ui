import { Component, ErrorHandler, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Intmanufacturer } from 'src/app/model/intmanufacturer';
import { SharedService } from 'src/app/service/shared.service';

@Component({
  selector: 'app-manufacturer-list',
  templateUrl: './manufacturer-list.component.html',
  styleUrls: ['./manufacturer-list.component.css']
})
export class ManufacturerListComponent implements OnInit {

  @ViewChild('sort') sort ?: MatSort;


  displayedColumns: string[] = ['mfgId','name','address','city','state','country','zipcode','contactno','email','fax'];

  manufacturerList : Intmanufacturer[] = new Array();
  dataSource = new MatTableDataSource<Intmanufacturer>(this.manufacturerList);

  constructor(
    private service : SharedService
  ) { }

  ngAfterViewInit() {
    // this.dataSource.sort = this.sort;
  }
  ngOnInit(): void {

    this.service.getAllManufacturer().subscribe(
      (data : Intmanufacturer[] ) => {
        this.manufacturerList = data;
      },
      (error : ErrorHandler) => {
        console.log(error);
      }
    );
  }

}
