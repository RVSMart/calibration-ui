import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { ErrorHandler, Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { Instruments } from '../model/instruments';
import { Intinstruments } from '../model/intinstruments';

@Injectable({
  providedIn: 'root'
})
export class InstService {


  private API_URL :string = 'http://localhost:8080/instrument';

  constructor(
    private http:HttpClient
  ) { }

  saveInstrument(instrument : Instruments) : Observable<Intinstruments>{
    return this.http.post<Intinstruments>(`${this.API_URL}/saveInstrument`, instrument);
  }

  getInstrumentList() : Observable<Intinstruments[]>{
    return this.http.get<Intinstruments[]>(`${this.API_URL}/instrumentList`);
  }

  viewInstrumentById(instId:string) : Observable<Intinstruments>{

    return this.http.get<Intinstruments>(`${this.API_URL}/editInstrument/` + instId);
  }


  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    // Return an observable with a user-facing error message.
    return throwError(
      'Something bad happened; please try again later.');
  }

  
}
