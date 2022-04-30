import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DetalleComponent } from './detalle/detalle.component';
import { HomeComponent } from './home.component';




const routes: Routes = [
  {
    path: '', component: HomeComponent, children: [
      {
        path: '', redirectTo: 'home', pathMatch: 'full'
      },
      {
        path: 'home', component: DashboardComponent
      },
      {
        path: 'detalle/:id', component: DetalleComponent
      },
     /*  {
        path: 'menu', component: MenuComponent
      } */

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
