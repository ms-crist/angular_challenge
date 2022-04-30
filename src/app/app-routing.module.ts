import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginGuard } from './guards/login.guard';
import { UserGuard } from './guards/user.guard';
import { DetalleComponent } from './pages/home/detalle/detalle.component';
import { PageNotFoundComponent } from './pages/home/page-not-found/page-not-found.component';




const routes: Routes = [
  {
    canActivate: [LoginGuard],
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule)
  },
  {
    canActivate: [UserGuard],
    path: '',
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule)
  },
  
 {
    canActivate: [UserGuard],
    path: 'detalle/:id', component: DetalleComponent
  },
 /*  {
    canActivate: [UserGuard],
    path: 'menu', component: MenuComponent
  }, */
  {
    path: '**',
    component: PageNotFoundComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
