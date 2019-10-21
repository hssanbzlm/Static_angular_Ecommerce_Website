export class Panier { 
  
    IdProduct:number;
    Quantity:number;
    Price:number; 
    Product:string;
  /**
   *
   */
  constructor(Id:number,q:number,p:number,pr:string) {
      this.IdProduct=Id;
      this.Price=p;
      this.Quantity=q;
      this.Product=pr;

  }
} 


