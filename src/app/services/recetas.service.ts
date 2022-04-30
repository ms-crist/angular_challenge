import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from "rxjs/operators"; 



@Injectable({
  providedIn: 'root'
})
export class RecetasService {
 
 





constructor(private _http: HttpClient) { }

  recetasApiUrl = "https://api.spoonacular.com/recipes/complexSearch?apiKey=b413da7b4c3e4b4d9c80af1f6160c2c7"
 

  topRecetas(): Observable<any> {
    return this._http.get(this.recetasApiUrl);
  }

  getQuery(query:string){
    const url = `${this.recetasApiUrl}${query}`;

    return this._http.get(url);

  }

  getrecetadetalle(id:any)
{
  let busquedaUrl = `https://api.spoonacular.com/recipes/${id}/information?apiKey=b413da7b4c3e4b4d9c80af1f6160c2c7&includeNutrition=true`
  return this._http.get(busquedaUrl);
}

 
}