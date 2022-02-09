import { Component, ErrorHandler, OnInit } from '@angular/core';
import { Intsupplier } from 'src/app/model/intsupplier';
import { SharedService } from 'src/app/service/shared.service';

@Component({
  selector: 'app-supplier-list',
  templateUrl: './supplier-list.component.html',
  styleUrls: ['./supplier-list.component.css']
})
export class SupplierListComponent implements OnInit {

  displayedColumns: string[] = ['supplierId','name','address','city','state','country','zipcode','contactno','email','fax'];

  supplierList : Intsupplier[] = new Array();

  constructor(
    private service : SharedService
  ) { }

  ngOnInit(): void {

    this.service.getAllSupplier().subscribe(
      (data:Intsupplier[]) => {
        this.supplierList = data;
      },
      (error : ErrorHandler) => {
        console.log(error);
      }
    );
  }

}
