import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse, HttpStatusCode } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class RecetasService {


constructor(private _http: HttpClient) { }

  recetasApiUrl = "https://api.spoonacular.com/recipes/complexSearch?apiKey=b413da7b4c3e4b4d9c80af1f6160c2c7"
 

  topRecetas(): Observable<any> {
    return this._http.get(this.recetasApiUrl)
    .pipe( catchError((err: HttpErrorResponse) => {
        return this.handleErrors(err)
      }))
  }
 
  getQuery(query:string){
    const url = `${this.recetasApiUrl}${query}`;

    return this._http.get(url)
    .pipe( catchError((err: HttpErrorResponse) => {
      return this.handleErrors(err)
    }))
  }

  

  getrecetadetalle(id:any)
{
  let busquedaUrl = `https://api.spoonacular.com/recipes/${id}/information?apiKey=b413da7b4c3e4b4d9c80af1f6160c2c7&includeNutrition=true`
  return this._http.get(busquedaUrl)
  .pipe( catchError((err: HttpErrorResponse) => {
    return this.handleErrors(err)
  }))
} 

handleErrors(error: HttpErrorResponse): Observable<never> {
  if (error.status == HttpStatusCode.Forbidden)
  return throwError(Swal.fire({
    icon: 'error',
    title: 'Oops...',
    text: 'No tiene permisos para realizar la solicitud.'
  }));
if (error.status == HttpStatusCode.NotFound)
  return throwError(Swal.fire({
    icon: 'error',
    title: 'Oops...',
    text: 'No existe receta para su búsqueda'
  }));
if (error.status == HttpStatusCode.InternalServerError)
  return throwError(Swal.fire({
    icon: 'error',
    title: 'Oops...',
    text: 'Error en el servidor. Por favor intente más tarde'
  }));
return throwError(Swal.fire({
  icon: 'error',
  title: 'Oops...',
  text: 'Un error inesperado ha ocurrido. Por favor intente más tarde'
}));
}


} 