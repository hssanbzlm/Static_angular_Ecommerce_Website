import { Component, OnInit } from '@angular/core';
import { TechserviceService } from '../services/techservice.service';
import { Panier } from '../classes/panier';
import { Tech } from '../classes/tech';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class PanierComponent implements OnInit {

  constructor(private service:TechserviceService) { }
  p:Panier[];
  ngOnInit() {  

    this.p=this.service.getPanier();

  }  

  onClickminus(id:number){ 

    this.service.deductPanier(id);


  } 

  onClickplus(id:number)
  { 
    this.service.incrementPanier(id);

  } 
  onClickdelete(id:number)
  {
    this.service.deleteFromPanier(id);
  }


}
