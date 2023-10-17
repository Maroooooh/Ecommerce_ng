import { Component, OnInit } from '@angular/core';
import { UserAuthenService } from 'src/app/Services/user-authen.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  userLogg: boolean;

  constructor(private userAuthService: UserAuthenService) {
    this.userLogg = this.userAuthService.isUserLogged;
    // console.log(this.userLogg);
  }
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
    this.userAuthService.getUserLoggedStatus().subscribe({
      next: (userStatus) => {
        this.userLogg = userStatus;
        console.log(this.userLogg);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
