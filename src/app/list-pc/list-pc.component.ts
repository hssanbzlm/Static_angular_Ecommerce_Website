import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TechserviceService } from '../services/techservice.service';
import { Tech } from '../classes/tech';


@Component({
  selector: 'app-list-pc',
  templateUrl: './list-pc.component.html',
  styleUrls: ['./list-pc.component.css']
})
export class ListPcComponent implements OnInit {

  constructor(private service:TechserviceService) { }  
 
 
  tech:Tech[];
  @Input()page:number=1;
  @Input()pageSize:number=8;
  @Input()collectionSize:number;  
  selectedsort:string;


  ngOnInit() {    
    this.getData();
    this.collectionSize=this.tech.length;

  }   
 

  getData()
  {
   this.tech=this.service.getData("pc"); 
   
  } 
 
  onAdd(t:Tech)
  {   
    this.service.Add(t); 
 
  } 

 onChange()
 {   
   var type="pc";
   var sortby=+this.selectedsort;
   this.tech=this.service.sortByPrice(type,sortby);

 }
 
    
    
}
