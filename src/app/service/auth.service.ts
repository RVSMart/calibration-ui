
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BehaviorSubject, Observable } from 'rxjs';
import { Employee } from '../model/employee';
import { IntPwd } from '../model/int-pwd';
import { IntRole } from '../model/int-role';
import { Intemployee } from '../model/intemployee';
import { Jwtresponse } from '../model/jwtresponse';
import { NewRole } from '../model/new-role';
import { RestPwd } from '../model/rest-pwd';
import { Signindata } from '../model/signindata';
import { User } from '../model/user';
import { map } from 'rxjs/operators';
import { JwtHelperService } from '@auth0/angular-jwt';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


const jwt  = new JwtHelperService();

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  API_URL:string = 'http://localhost:8080';

  private readonly mockuser = new Signindata("sivaiah", "ravuri");

  empInfo: BehaviorSubject<any> = new BehaviorSubject(null);

  private currentUserSubject!: BehaviorSubject<User>;

  public currentUser ?: Observable<User>;

  private decokdeToken : any;
  

  isAuthenicated = false;

  constructor(
    private http: HttpClient,
    private snackbar : MatSnackBar
  ) { 

    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('USER_TOKEN')  || '{}') );
    this.currentUser = this.currentUserSubject.asObservable();


  }

  createRole(roles : NewRole) : Observable<IntRole>{
    return this.http.post<IntRole>(`${this.API_URL}/saveRole`, roles);
  }



  roleList() : Observable<IntRole[]>{
    return this.http.get<IntRole[]>(`${this.API_URL}/roleList`);
  }


  /**
   *  Employee Service
   * ***/

  saveEmplyee(newEmp : Employee) : Observable<Employee>{
    return this.http.post<Employee>(`${this.API_URL}/saveNewEmp`, newEmp);
  }
  
  getAllEmployee() : Observable<Intemployee[]>{
    return this.http.get<Intemployee[]>(`${this.API_URL}/empList`);
  }
  
  
  /***
   *  Employee Authentication point
   * 
   */

  authenticate( signin: Signindata) {

    console.log("Username " , signin.getUsername());
    console.log("Password " , signin.getPassword());

     return this.http.post<string>(`${this.API_URL}/authenticate`,signin, httpOptions)
     .pipe( map( (user : any) => {
       localStorage.setItem('USER_TOKEN', JSON.stringify(user));
      //  this.currentUserSubject.next(user);
      this.saveToken(user);
       return user;
     }))
     ;

    //  return this.http.post<Jwtresponse>(`${this.API_URL}/welcome`,signin, httpOptions);




    // if ( this.checkCredentials(signin)){
    //   this.isAuthenicated = true;
    //   return true;
    // }

    // this.isAuthenicated = false;
    // return false;
  }

  private saveToken(token:any) : any{
    console.log(token);
      this.decokdeToken = jwt.decodeToken(token);
      localStorage.setItem('USER_TOKEN', token);
      localStorage.setItem('AUTH_META', JSON.stringify(this.decokdeToken));
      return token;
  }


  isLoggedIn() {
    return localStorage.getItem('USER_TOKEN') != null;
  }



  checkCredentials(signin: Signindata) : boolean {

    return this.checkUsername(signin.getUsername()) && this.checkPassword(signin.getPassword());

   
  }
  private checkUsername( username : string ) : boolean{
    return username === this.mockuser.getUsername();
  }

  private checkPassword(password: string) : boolean{
     return password === this.mockuser.getPassword();
  }

  createPwd(pwd : RestPwd) : Observable<IntPwd>{

    return this.http.post<IntPwd>(`${this.API_URL}/saveEmp`, pwd);
  }
  
  public getUser() : any{
    const user = window.sessionStorage.getItem('USER_TOKEN');
    if( user ) {
      console.log(user)
      return JSON.stringify(user);
    }
    return {};
  }

    logout() {
    
      localStorage.removeItem('USER_TOKEN');
      this.currentUserSubject.next;
  }
}
