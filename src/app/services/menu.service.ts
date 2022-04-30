import { Injectable } from '@angular/core';
import { MenuActual } from '../pages/home/menu.actual';



@Injectable({
  providedIn: 'root'
})
export class MenuService {
 

  CLAVE_LOCAL_STORAGE = "menu_resto";

  constructor() { }

  obtenerMenu(): MenuActual[] {
    return JSON.parse(localStorage.getItem(this.CLAVE_LOCAL_STORAGE) || "[]")
    
  }
 guardarMenu(menus: MenuActual[]) {
    localStorage.setItem(this.CLAVE_LOCAL_STORAGE, JSON.stringify(menus))
  } 



}