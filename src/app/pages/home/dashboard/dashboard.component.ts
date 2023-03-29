import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { RecetasService } from 'src/app/services/recetas.service';
import { fromEvent } from 'rxjs';
import { debounceTime, distinctUntilChanged, filter, map } from 'rxjs/operators';
import { SumaPrecioService } from 'src/app/services/sumaPrecio.service';
import { DetalleComponent } from '../detalle/detalle.component';










@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
  
})



export class DashboardComponent implements OnInit {

  busqueda: string | undefined;
  muestraRecetas: any;
  miReceta: any;
  midinero: any;
  service: any;
 

  
  

  constructor(private _route: Router, private recetasService: RecetasService, private route: Router, private _activatedRoute: ActivatedRoute, private sumaPrecioService: SumaPrecioService, private detalleComponent: DetalleComponent) {}
  

  
  @ViewChild('recipeSearchInput', { static: true })
  recipeSearchInput!: ElementRef;

  

  ngOnInit(): void {

     /* this.midinero = (Math.floor(this.miReceta.pricePerServing))/100 */

     this.midinero = this.sumaPrecioService.suma;
     this.detalleComponent.midineroprom
    }

  details(id:any){
    // console.log(id);
    this.route.navigate([`/detalle/${id}`])
  }

 
  

  buscar(){

    fromEvent(this.recipeSearchInput.nativeElement, 'keyup').pipe(
      map((event: any) => {
          return event.target.value;
      })
      ,filter(res => res.length > 2)
      ,debounceTime(1000)           
      ,distinctUntilChanged()
      ).subscribe((text: string) => {
          this.recetasService.getQuery("&query="+this.busqueda).subscribe((result: any) => {
            console.log(result);
            this.muestraRecetas = result.results;
            }) 
          },(err: any)=>{
          alert(err);
          console.log('error',err);
          });
    

    
  }



}



