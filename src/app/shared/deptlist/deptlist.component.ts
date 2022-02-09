import { HttpClient } from '@angular/common/http';
import { Component, ErrorHandler, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Intdept } from 'src/app/model/intdept';
import { SharedService } from 'src/app/service/shared.service';

@Component({
  selector: 'app-deptlist',
  templateUrl: './deptlist.component.html',
  styleUrls: ['./deptlist.component.css']
})
export class DeptlistComponent implements OnInit {

  displayedColumns: string[] = ['deptid','name','contact','email','hod','fax'];

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  dept : Intdept[] = new Array();

 

  constructor(
    private service : SharedService
  ) { }

  ngOnInit(): void {

    this.service.getListDept().subscribe(
      (data:Intdept[]) => {
        this.dept = data;
      },
      (error:ErrorHandler) => {
        console.log(error);
      } 
    );

  }

  dataSource = new MatTableDataSource<Intdept>(this.dept);

  ngAfterViewInit() {

    this.dataSource.paginator = this.paginator;
    
  }

}



