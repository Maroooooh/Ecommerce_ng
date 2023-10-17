import { Component } from '@angular/core';
import { Iproducts } from 'src/app/Models/iproducts';

@Component({
  selector: 'app-product-parent',
  templateUrl: './product-parent.component.html',
  styleUrls: ['./product-parent.component.scss']
})
export class ProductParentComponent {
  listFilter : string ='' ;
  cart : Iproducts [] = [ ]; 
  
  // counter : number = 1 ; 
  FunAddCard(newprod : Iproducts){
    // console.log("recived to parent " + newprod ); 
    const founded= this.cart.find((product) => product.id === newprod.id);
    if (!founded){
       this.cart.push(newprod) ; 
    } else{
      newprod.counter ++ ;
    }
  } 
  decreasecounter(newItem : Iproducts) {
    if (newItem.counter >= 1 ) 
       newItem.counter -- ; 
   
  }
}
