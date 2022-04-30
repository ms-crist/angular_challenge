import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute, Route } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecetasDetalleService {
recetaId: any;
  

constructor(private _http: HttpClient, private activatedRoute: ActivatedRoute ) { }



ApiUrl = "https://api.spoonacular.com/recipes/"


ngOnInit(): void {
  this.recetaId = this.activatedRoute.snapshot.paramMap.get("id");
  this.getRecetaid(this.recetaId);
}

public getRecetaid(id:string): Observable<any>{
  let urlApi = this.ApiUrl + id + "/information?apiKey=9ca6c354defb4d9daf193fc122c5faa8&information?includeNutrition=false" ;
  return this._http.get<any>(urlApi);
}

}
