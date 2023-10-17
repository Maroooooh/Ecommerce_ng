import { Component, OnInit } from '@angular/core';
import { UserAuthenService } from 'src/app/Services/user-authen.service';

@Component({
  selector: 'app-user-authen',
  templateUrl: './user-authen.component.html',
  styleUrls: ['./user-authen.component.scss']
})
export class UserAuthenComponent implements OnInit{
  userLog  : boolean = true ; 
  constructor (private userauthservice : UserAuthenService){
    
  }
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
    this.userLog = this.userauthservice.isUserLogged ;
  }
  loginFunc () {
    this.userauthservice.Login("test@gmail.com" , "12345") ;
    this.userLog = this.userauthservice.isUserLogged ;
  }
  logoutFunc(){
    this.userauthservice.Logout() ; 
    this.userLog = this.userauthservice.isUserLogged ;
  }
  
}
