import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MenuService } from './menu.service';

@Injectable()
export class PromedioService {
    promedio: any;
    suma: any = 0;

constructor(private menuService:MenuService,  private activatedRoute: ActivatedRoute) { let newPrecio:any = this.menuService.obtenerMenu();
    //let data = JSON.parse(json);
    //let suma: any= 0;
    //Recorriendo el objeto
    for(let x in newPrecio){
      this.suma += newPrecio[x].precio;
  }
  let promedio = this.suma /  this.suma.length;
  console.log('promedio: ', promedio);
  }
  
}

