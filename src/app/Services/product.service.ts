import { Injectable } from '@angular/core';
import { Iproducts } from '../Models/iproducts';

@Injectable({
  providedIn: 'root'   // can use it around the project
})
export class ProductService {

  productlist: Iproducts[];
 
  constructor() { 
    this.productlist = [
      
      
     
      
    ];
  }
  getAllProd () : Iproducts[]{
    return this.productlist ;
  }
  performfilter(filterValue: string): Iproducts[] {
    var val = parseInt (filterValue) ; 
    return this.productlist.filter((product: Iproducts) => product.price === val);
  }
  getProductById (prodid : number):Iproducts | undefined{
    return this.productlist.find(prod=> prod.id == prodid) ; 
  }
  getProductIDSList () :number []{
    return this.productlist.map (prod=>prod.id ) ; 
  }
}
 