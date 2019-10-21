import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListPcComponent } from './list-pc/list-pc.component';
import { ListTelephoneComponent } from './list-telephone/list-telephone.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DetailsTechComponent } from './details-tech/details-tech.component';
import { PanierComponent } from './panier/panier.component';
import { CommandeComponent } from './commande/commande.component';
import { SearchComponent } from './search/search.component';


const routes: Routes = [  
  {path:"pc",component:ListPcComponent,pathMatch:"full"}, 
  {path:"telephone",component:ListTelephoneComponent,pathMatch:"full"} , 
  {path:"details/:Id",component:DetailsTechComponent},  
  {path:"search/:key",component:SearchComponent},
  {path:"panier",component:PanierComponent}, 
  {path:"commande",component:CommandeComponent},
  {path:"",redirectTo:"/pc",pathMatch:"full"} ,
  { path:"**",component:PageNotFoundComponent} 



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
