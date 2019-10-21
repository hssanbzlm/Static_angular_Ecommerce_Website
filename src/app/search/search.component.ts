import { Component, OnInit, Input } from '@angular/core';
import { TechserviceService } from '../services/techservice.service';
import { Router, Route, ActivatedRoute } from '@angular/router';
import { Tech } from '../classes/tech';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private service:TechserviceService,private router:ActivatedRoute) { }
  tech:Tech[]=[]; 
  @Input()page:number=1;
  @Input()pageSize:number=4;
  @Input()collectionSize:number;  
  title:string;

  ngOnInit() {   

    this.router.paramMap.subscribe(params=>{ 
      this.title=params.get("key");
      this.tech= this.service.research(this.title); 
      this.collectionSize=this.tech.length;

    })

   
  }  

  

  onAdd(t:Tech)
  {   
    this.service.Add(t); 

  }
 

}
