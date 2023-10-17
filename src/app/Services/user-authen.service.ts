import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserAuthenService {
  UserLoggedBehavior : BehaviorSubject<boolean> ;
  constructor() {
    this.UserLoggedBehavior = new BehaviorSubject<boolean> (this.isUserLogged) ;
   }
   Login(username : string , password : string){
    let token  = "12345" 
    localStorage.setItem('userToken' , token);
    this.UserLoggedBehavior .next(true) ; 
   }
   Logout (){
    localStorage.removeItem('userToken') ;
    this.UserLoggedBehavior .next(false) ; 
   }
  get isUserLogged() : boolean{
    return (localStorage.getItem("userToken"))?true : false ; 
  }
  getUserLoggedStatus () :Observable<boolean>{
    return this.UserLoggedBehavior.asObservable() ; 
  }
}
