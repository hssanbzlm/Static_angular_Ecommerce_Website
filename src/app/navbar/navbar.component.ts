import { Component, OnInit, Input } from '@angular/core';
import { TechserviceService } from '../services/techservice.service';
import { Route, Router } from '@angular/router';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private service:TechserviceService,private route:Router) {  
  }
 key:string="";

  ngOnInit() {  
  
    
  } 
   
  onSearch()
  {  
    if(this.key.length==0)
    return 0;
    this.route.navigate(["/search",this.key]);

  }


}
