import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { ListTelephoneComponent } from './list-telephone/list-telephone.component';
import { ListPcComponent } from './list-pc/list-pc.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import {MatPaginatorModule} from '@angular/material';
import { DetailsTechComponent } from './details-tech/details-tech.component'; 
import {MatIconModule} from '@angular/material'
import  {MatBadgeModule} from "@angular/material/badge" 
import {MatButtonModule} from '@angular/material/button';
import { PanierComponent } from './panier/panier.component'; 
import {MatTableModule} from '@angular/material/table';
import {MatCardModule} from '@angular/material/card'; 
import  {FormsModule,ReactiveFormsModule} from "@angular/forms";
import { CommandeComponent } from './commande/commande.component'   
import {MatStepperModule} from '@angular/material/stepper';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SearchComponent } from './search/search.component'; 
import {MatSelectModule} from '@angular/material/select';
import { FooterComponent } from './footer/footer.component';
import { MatFormFieldModule, MatInputModule } from '@angular/material';













@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ListTelephoneComponent,
    ListPcComponent,
    PageNotFoundComponent,
    DetailsTechComponent,
    PanierComponent,
    CommandeComponent,
    SearchComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    MatPaginatorModule,
    MatIconModule,
    MatBadgeModule,
    MatButtonModule,
    MatTableModule,
    MatCardModule,
    FormsModule,
    ReactiveFormsModule,
    MatStepperModule,
    BrowserAnimationsModule,
    MatSelectModule,
    MatFormFieldModule,
    MatInputModule
    ],  
    schemas: [CUSTOM_ELEMENTS_SCHEMA],

   

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
