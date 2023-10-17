import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICategory } from '../Models/icategory';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private httpclient : HttpClient) { }
  getAllCategories () : Observable <ICategory[]>{
    // return this.httpclient.get<Iproducts[]>("http://localhost:3000/products") ;
    
    return this.httpclient.get<ICategory[]>(`${environment.BaseApiURL}/category`) ;
  }
}
