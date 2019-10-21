import { Injectable } from '@angular/core';
import {techs} from 'src/mock-tech' 
import {Tech} from 'src/app/classes/tech' 
import {Panier} from '../classes/panier';

@Injectable({
  providedIn: 'root'
}) 
export class TechserviceService {

  constructor() { }  
    p:Panier[]=[];
  
    panier=new Panier(0,0,0,""); //initialization
    
 

  getData(type:string)
  {      
    
    var tech:Tech[]=[];

    for(var i=0;i<techs.length;i++)
    {  if(techs[i].type.match(type))
       tech.push(techs[i]);
    } 

    return tech;
     

  } 

  getTech(Id:number):Tech
  {    
    if(techs.find(t=>t.id==Id)==null)
    { 
    return null; 
    }
    
    else 
    { 
    return techs.find(t=>t.id==Id);
    }


  } 

  Add(t:Tech)
  {    
    this.panier=this.p.find(p=>p.IdProduct==t.id);
    if(this.panier==null) 
    {       
    this.panier=new Panier(0,0,0," ");
    this.panier.IdProduct=t.id;
    this.panier.Quantity=1;
    this.panier.Price=t.prix;  
    this.panier.Product=t.name;
    this.p.push(this.panier);  

    } 
    else 
    {   
      
      this.panier=this.p.find(x=>x.IdProduct==t.id); 
      var x=this.p.indexOf(this.panier); 
      this.p[x].Quantity=this.p[x].Quantity+1;
      this.p[x].Price=this.p[x].Price+t.prix;

    } 
     

   
   

  }  
  incrementPanier(id:number)
  { 
    this.panier=this.p.find(p=>p.IdProduct==id); 
    if(this.panier!=null)
    { 
      var x=this.p.indexOf(this.panier); 
      this.p[x].Quantity=this.p[x].Quantity+1;
      this.p[x].Price=this.p[x].Price+this.getProduct(id).prix; 
      
       
       
    }





  }
   deductPanier(id:number)
   { 

    this.panier=this.p.find(p=>p.IdProduct==id); 
    if(this.panier!=null)
    { 

      this.panier=this.p.find(x=>x.IdProduct==id); 
      var x=this.p.indexOf(this.panier); 
      this.p[x].Quantity=this.p[x].Quantity-1;
      this.p[x].Price=this.p[x].Price-this.getProduct(id).prix; 
      if(this.p[x].Quantity==0)
      { 
        this.deleteFromPanier(this.p[x].IdProduct);
      }
       
       
    }


   }
  getPanier()
  {  
    return this.p;
  } 

 getQuantity(id:number):number
 {   
   if(this.p.find(x=>x.IdProduct==id))
  return this.p.find(x=>x.IdProduct==id).Quantity;
  else return 0;

 } 

 deleteFromPanier(id:number)
 {  
    var product= this.p.find(p=>p.IdProduct==id);
    console.log(product);
    var index=this.p.indexOf(product,0);
    console.log(index);
    this.p.splice(index,1);
    console.log(this.p);

 }  

 getProduct(id:number)
 {
   return techs.find(p=>p.id==id);
 } 

 sortByPrice(type:string,sortby:number)  // if sortby=0 => sort will be ascendant by price 
 {                                      // if sortby =1 => sort will be descendant by price   
    var unsortedarray:Tech[];           //if sortby=2 => reset 
    var sortedarray:Tech[];  
    unsortedarray=this.getData(type);
    sortedarray=unsortedarray.slice(0);
       
   if(sortby==0)
   {
  sortedarray.sort((t1,t2)=>{
  if(t1.prix>t2.prix)
  return 1;
  if(t1.prix<t2.prix)
  return -1; 
  return 0;
 
}); 
   } 

   else if(sortby==1)
   { 

    sortedarray.sort((t1,t2)=>{
      if(t1.prix<t2.prix)
      return 1;
      if(t1.prix>t2.prix)
      return -1; 
      return 0;
     
    }); 


   } 
   else 
   {
     return unsortedarray;
   }
return sortedarray;



 } 

 research(keyword:string)
 {   
   var techsearch:Tech[]=[];  
   for(var i=0;i<techs.length;i++)
   { 
     if(techs[i].name.includes(keyword)||techs[i].type.includes(keyword)||techs[i].caracteristics.includes(keyword))
  
     techsearch.push(techs[i]);
   }
   return techsearch;

 } 
 getLength()
 {
   return this.p.length;
 } 

 getTotalaprice()
 {  
   var total:number=0;
   for(var i=0;i<this.p.length;i++)
   { 
     total=this.p[i].Price+total;

   } 
   return total;
 }
   
 deletePanier()
 {
   this.p.splice(0,this.p.length);
 }
   

  
}
