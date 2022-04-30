import { Injectable } from '@angular/core';
import { MenuService } from './menu.service';
import { ActivatedRoute} from '@angular/router';




@Injectable()
export class SumaPrecioService {
suma: any = 0;
resta: number = 0;
  newPrecio: any;


constructor(private menuService:MenuService,  private activatedRoute: ActivatedRoute) { 

  let newPrecio = this.menuService.obtenerMenu();
  //let data = JSON.parse(json);
  //let suma: any= 0;
  //Recorriendo el objeto
  for(let x in newPrecio){
  this.suma += newPrecio[x].precio;
 
 
 
  
}
  console.log('precio total: ' + this.suma);
}

}


  









