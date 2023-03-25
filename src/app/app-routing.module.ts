import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'',
    pathMatch:'full',
    redirectTo:'home'
  },
  {
    path:'home',
    loadChildren: ()=> import('./pages/home/home.module').then(m=>m.HomeModule)

  },
  {
    path:'bike-list',
    loadChildren: ()=> import('./pages/bike-list/bike-list.module').then(m=>m.BikeListModule)
  },
  {
    path:'contact',
    loadChildren: ()=> import('./pages/contact/contact.module').then(m=>m.ContactModule)
  },
  {
    path:'**',
    loadChildren: ()=> import('./pages/not-found/not-found.module').then(m=> m.NotFoundModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
