import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import {Tech} from 'src/app/classes/tech' 
import {techs} from 'src/mock-tech';
import { TechserviceService } from '../services/techservice.service'; 
import {Location} from '@angular/common';



@Component({
  selector: 'app-details-tech',
  templateUrl: './details-tech.component.html',
  styleUrls: ['./details-tech.component.css']
})
export class DetailsTechComponent implements OnInit {
  
  tech:Tech; 
  quantity:number=0;
  constructor(private route:ActivatedRoute,private service:TechserviceService,private location:Location) { }

  ngOnInit() {  
    if(this.getTech()!=null) 
    {
    this.tech=this.getTech(); 
    
    this.quantity=this.service.getQuantity(this.tech.id);
    }
  } 

  getTech():Tech
  {  
    const id=+this.route.snapshot.paramMap.get("Id"); 
    
    if(this.service.getTech(id)==null) 
    {  
      this.location.back();
     
      return null;
      
    }
      else
      {
      return this.service.getTech(id);
      }
      



  } 
  

  onAdd(t:Tech)
  {   
    this.service.Add(t); 
 
  } 

}
