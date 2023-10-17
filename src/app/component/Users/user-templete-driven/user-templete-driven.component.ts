import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Users } from 'src/app/Models/users';
import { UsersService } from 'src/app/Services/users.service';

@Component({
  selector: 'app-user-templete-driven',
  templateUrl: './user-templete-driven.component.html',
  styleUrls: ['./user-templete-driven.component.scss']
})
export class UserTempleteDrivenComponent {
  user: Users = {} as Users;
  constructor(private userService: UsersService, private router: Router) {}
  addNewUser() {
    // static data
    // let u: Users = {
    //   firstName: 'Marah',
    //   lastName: 'Mohamed',
    //   email: 'asd@gmail.com',
    // };

    // this.userService.signUpUser(u).subscribe({
    //   next:(data)=>{
    //     console.log(data);
    //     this.router.navigate(['mainpath/Products']);
    //   },
    //   error:(err)=>{
    //     console.log(err);

    //   }
    // });

    // second case
    this.userService.signUpUser(this.user).subscribe({
      next: (data) => {
        console.log(data);
        this.router.navigate(['mainpath/Products']);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
