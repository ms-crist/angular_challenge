import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginDto } from '../Models/login-dto';

@Injectable({
  providedIn: 'root'
})
export class LoginService {


  get userStorage(): any {
    return localStorage.getItem('user') ? true : false;
  }

  constructor(private _http: HttpClient) { }

  loginUser(data: LoginDto): Observable<any> {
   /*  let urlService = environment.urlBase + "/login"; */
    return this._http.post("http://challenge-react.alkemy.org", data);

    
    

  }

  

  saveUser(data: any): void {
    localStorage.setItem("user", data);
  }

  logOut() {
    localStorage.removeItem('user');
  }
}
