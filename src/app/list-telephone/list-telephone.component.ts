import { Component, OnInit, Input } from '@angular/core';
import { Tech } from '../classes/tech';
import { TechserviceService } from '../services/techservice.service';

@Component({
  selector: 'app-list-telephone',
  templateUrl: './list-telephone.component.html',
  styleUrls: ['./list-telephone.component.css']
})
export class ListTelephoneComponent implements OnInit {

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
   this.tech=this.service.getData("tel"); 

   
  }  

  onAdd(t:Tech)
  {   
    this.service.Add(t); 

  } 

  onChange()
  {   
    var type="tel";
    var sortby=+this.selectedsort;
    this.tech=this.service.sortByPrice(type,sortby);
 
  }

}
