import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class UserService {
  cookies: any;

  constructor(private http: HttpClient) {}


  }


