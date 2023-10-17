import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Users } from '../Models/users';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment.development';
import { catchError, retry, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  httpheader={};
                                   // عن طريقها ابعت اللغه 
  constructor(private httpclient : HttpClient) { 
    this.httpheader={    // OBJ 
      headers:new HttpHeaders({
        'Content-Type':'application/json' // my app use json on his app
      })
    };
  }

  signUpUser(user:Users):Observable<Users> {
    return this.httpclient.post<Users>(`${environment.BaseApiURL}/users`,JSON.stringify(user),
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
}
