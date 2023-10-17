import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Observer, catchError, retry, throwError } from 'rxjs';
import { Iproducts } from '../Models/iproducts';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ProductsWithApiService {
 // inject => httpclient
 httpheader={};
  constructor(private httpclient : HttpClient) { 
    this.httpheader={    // OBJ 
      headers:new HttpHeaders({
        'Content-Type':'application/json' // my app use json on his app
      })
    };
  }
  getAllProd () : Observable <Iproducts[]>{
    // return this.httpclient.get<Iproducts[]>("http://localhost:3000/products") ;
    
    return this.httpclient.get<Iproducts[]>(`${environment.BaseApiURL}/products`) ;
  }
  getprodbyid (prodid : number):Observable<Iproducts>  {
    return this.httpclient.get<Iproducts> (`${environment.BaseApiURL}/products/${prodid}`) ;
  }

  // Query string
  searchWithMaterial (mat : string ) : Observable<Iproducts[]> {
    return this.httpclient.get<Iproducts[]> (`${environment.BaseApiURL}/products?material=${mat}`) ;
  }

  getproductbycategoryid (cid : number ) : Observable<Iproducts[]>{
    return this.httpclient.get<Iproducts[]> (`${environment.BaseApiURL}/products?categoryid=${cid}`)
  }
  AddNewProduct(prod:Iproducts):Observable<Iproducts> {
    return this.httpclient.post<Iproducts>(`${environment.BaseApiURL}/products`,JSON.stringify(prod),
    this.httpheader).pipe(  // handel error   ** using pipe becsuse we make users Observable
      retry(3),
      catchError((err)=>{
        return throwError(()=>{
          // return new Error(err)
          return new Error('Error while signing up')
        })
      })
    )

  }


  deleteProduct (prodid : number) :Observable<Iproducts> {
    return this.httpclient.delete<Iproducts>(`${environment.BaseApiURL}/products/${prodid}`);

  }

}
