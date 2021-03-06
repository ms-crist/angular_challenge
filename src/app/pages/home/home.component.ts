import { Component, ElementRef, Injectable, OnInit, ViewChild } from '@angular/core';
import { LoginService } from 'src/app/services/login.service'
import { ActivatedRoute, Router } from '@angular/router';
import { NotificationService } from 'src/app/services/notification.service';
import Swal from 'sweetalert2';
import { DetalleComponent } from './detalle/detalle.component';
import { MenuService } from 'src/app/services/menu.service';
import { MenuActual } from './menu.actual';
import { SumaPrecioService } from 'src/app/services/sumaPrecio.service';
import { PromedioService } from 'src/app/services/promedio.service';
import { RecetasService } from 'src/app/services/recetas.service';
import { refsToArray } from '@angular/compiler/src/render3/util';















@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

@Injectable({
  providedIn: 'root' 
})

export class HomeComponent implements OnInit {

  midinero: any;
  contenidoLocal: any;
  pedidos: null | undefined;
  botonesDeshabilitados: boolean | undefined;
  hayPedido: boolean | undefined;
  storage: any;
  midineroprom: any;
  precio: any;
  

 
  

  constructor(private _loginService: LoginService, private _route: Router, private _notification: NotificationService, private detalleComponent: DetalleComponent, private menuService: MenuService, private sumaPrecioService: SumaPrecioService, private promedioService: PromedioService, private service: RecetasService, private _activatedRoute: ActivatedRoute) { 
    this.midinero = this.sumaPrecioService.suma;
  
    this.midineroprom = this.detalleComponent.midineroprom
    
  
  }

  
  miReceta:any = null
  index: any;
  byID: number | undefined
  id: any;
  indice: any;
  newObj = this.menuService.obtenerMenu();
  
  
 
  ngOnInit(): void {
    
    }
    

  

 details(id:any){
    
  // console.log(id);
  this._route.navigate([`/detalle/${id}`])
}


totales(){
  this.midinero = this.sumaPrecioService.newPrecio;
}

  
  

  obtenerMenu(): MenuActual[] {
    return JSON.parse(localStorage.getItem("menu_resto") || "[]")
  }





  cerrarSesion() {
    this._loginService.logOut();
    this._route.navigate(['/login']);
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Ha cerrado sesi??n',
      showConfirmButton: false,
      timer: 2000
    })
  }

  

  seccionMenu() {
    this._route.navigate(['/menu']);
  }

  

  vaciarMenu(){
    Swal.fire({
      title: '??Desea eliminar el men???',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'Si',
      denyButtonText: `No`,
    }).then((result) => {
      if (result.isConfirmed) {
        localStorage.removeItem("menu_resto");
        this.midinero = 0;
        Swal.fire('Men?? eliminado!', '', 'success')
      } else if (result.isDenied) {
        Swal.fire('El men?? no se elimin??', '', 'info')
      }
    })
    
  }

 

  eliminarPlato(indice: number) {
  
  
    Swal.fire({
      title: '??Est??s seguro de borrar?',
      text: "??No podr??s revertir los cambios!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'S??, Borrar!'
    }).then((result) => {
      if (result.isConfirmed) {
           
        Swal.fire(
          'Borrado!',
          'El plato ha sido eliminado del men??',
          'success'
        )
        
        this.newObj.splice(indice, 1);
        this.menuService.guardarMenu(this.newObj); 
        this.midinero = this.newObj;
      }
     
    })
  }
  


}





