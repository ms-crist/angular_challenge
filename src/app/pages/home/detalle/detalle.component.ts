import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RecetasService } from 'src/app/services/recetas.service';
import { Injectable } from '@angular/core';
import { MenuActual } from '../menu.actual.model';
import Swal from 'sweetalert2';
import { MenuService } from 'src/app/services/menu.service';
import { SumaPrecioService } from 'src/app/services/sumaPrecio.service';
import { PromedioService } from 'src/app/services/promedio.service';





@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html', 
  styleUrls: ['./detalle.component.css']
})

@Injectable({
  providedIn: 'root' 
})

export class DetalleComponent implements OnInit {


  midinero: any;
  contenidoLocal: any;
  sumaTotal: any;
  suma: any;
  midineroprom: any;
  total: any;


  constructor(private router:Router,private service: RecetasService,private activatedroutes:ActivatedRoute, private menuService: MenuService, private sumaPrecioService: SumaPrecioService, private promedioService: PromedioService) { 
    this.midinero = this.sumaPrecioService.suma;
  }

  miReceta:any = null
  miId:any = null
  precio: any;

 
  tituloMenu: any = ""
  imagenMenu: any = ""
  tiempoMenu: any = ""
  precioMenu: any = ""
  healthscoreMenu: any = ""
  public menu: MenuActual[] = []
  totalMenu: any = 0;

  ngOnInit(): void {
    this.service.getrecetadetalle(this.activatedroutes.snapshot.params.id).subscribe((res: any)=>{
      console.log(res)
      this.miReceta = res
     console.log(this.miReceta.image)
     //this.midineroprom = (Math.floor(this.miReceta.healthScore))/4 
    this.midinero = this.sumaPrecioService

     
     
    })
  

  }

/* sumaMenu(){
  this.midinero = this.sumaPrecioService.sumaMenu();
  return this.midinero;
} */


  details(id:any){
    
    // console.log(id);
    this.router.navigate([`/detalle/${id}`])
  }

  irInicio(){
    this.router.navigate(['/home'])
  }

  
  totales(){
    this.midinero = this.sumaPrecioService.newPrecio;
  }
  
  
  

  guardarPlato() {
    let contenidoLocal = this.menuService.obtenerMenu();
    const nuevoMenu = new MenuActual(this.miReceta.title, this.miReceta.image, this.miReceta.readyInMinutes, this.miReceta.pricePerServing, this.miReceta.healthScore);
    if (contenidoLocal.length>=4){           
      Swal.fire({
        position: 'center',
        icon: 'error',
        title: 'El menú puede tener un máximo de 4 platos',
        showConfirmButton: false,
        timer: 1500
      })
    } else {
      const coincidencia = contenidoLocal.find(item => item.titulo === this.miReceta.title)
      if (coincidencia){
          //alert("El producto ya se encuentra en el carrito.");
          Swal.fire({
            position: 'center',
            icon: 'error',
            title: 'El plato ya se encuentra en el menú',
            showConfirmButton: false,
            timer: 1500
          })
    } else {
        contenidoLocal.push(nuevoMenu);
        localStorage.setItem("menu_resto", JSON.stringify(contenidoLocal));
        this.midinero = this.sumaPrecioService.newPrecio;
        //this.midineroprom = this.promedioService.promedio;    
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Plato agregado al menú',
          showConfirmButton: false,
          timer: 1500
        })
        .then((result) => {
          //window.location.reload();
          this.router.navigate(['']);
          //this.midinero = this.sumaPrecioService.newPrecio;
          //this.router.navigate(['/home']);
          //this.midinero = this.sumaPrecioService.newPrecio;
      });
        //this.suma++;
       //this.totales();
        this.midinero = this.sumaPrecioService.newPrecio;
       
      } 
    } 
  }
}
  
  
