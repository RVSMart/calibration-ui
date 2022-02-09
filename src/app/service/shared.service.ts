import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Department } from '../model/department';
import { Intdept } from '../model/intdept';
import { Intmanufacturer } from '../model/intmanufacturer';
import { Intsupplier } from '../model/intsupplier';
import { Intunitlocation } from '../model/intunitlocation';
import { Manufacturer } from '../model/manufacturer';
import { Supplier } from '../model/supplier';
import { Unitlocation } from '../model/unitlocation';


@Injectable({
  providedIn: 'root'
})
export class SharedService {

  private API_URL:string = 'http://localhost:8080/department';

  constructor(
    private http: HttpClient
  ) { }

  saveDepartment(depart : Department):Observable<Intdept>{
    return this.http.post<Intdept>(`${this.API_URL}/saveDept`, depart);
  }

  getListDept(): Observable<Intdept[]>{

    console.log("31");
    return this.http.get<Intdept[]>(`${this.API_URL}/deptList`);
  }

  saveUnitLocation(unitLoca: Unitlocation) : Observable<Intunitlocation>{

    console.log(unitLoca);
    return this.http.post<Intunitlocation>(`${this.API_URL}/saveUnitLoc`, unitLoca);
  }


  getAllUnitLocationList() : Observable<Intunitlocation[]>{
    return this.http.get<Intunitlocation[]>(`${this.API_URL}/unitsList`);
  }

  saveSupplier(supplier: Supplier) : Observable<Intsupplier>{
    return this.http.post<Intsupplier>(`${this.API_URL}/saveSupplier`, supplier);
  }

  getAllSupplier() : Observable<Intsupplier[]>{
    return this.http.get<Intsupplier[]>(`${this.API_URL}/supplierList`);
  }


  saveManufacturer(manufacturer : Manufacturer) : Observable<Intmanufacturer>{
    return this.http.post<Intmanufacturer>(`${this.API_URL}/saveManufacturer`, manufacturer);
  }


  getAllManufacturer() : Observable<Intmanufacturer[]>{
    return this.http.get<Intmanufacturer[]>(`${this.API_URL}/manufacturerList`);
  }




}
