import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Iproducts } from 'src/app/Models/iproducts';
import { ProductsWithApiService } from 'src/app/Services/products-with-api.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent {
  newProduct : Iproducts = {} as Iproducts ; 
  constructor(private prodservice: ProductsWithApiService, private router: Router) {}


  addNewproduct() {
       
        this.prodservice.AddNewProduct(this.newProduct).subscribe({
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



// export class UserTempleteDrivenComponent {
//   user: Users = {} as Users;
//   constructor(private userService: UsersService, private router: Router) {}
//   addNewUser() {
//     // static data
//     // let u: Users = {
//     //   firstName: 'Marah',
//     //   lastName: 'Mohamed',
//     //   email: 'asd@gmail.com',
//     // };

//     // this.userService.signUpUser(u).subscribe({
//     //   next:(data)=>{
//     //     console.log(data);
//     //     this.router.navigate(['mainpath/Products']);
//     //   },
//     //   error:(err)=>{
//     //     console.log(err);

//     //   }
//     // });

//     // second case
//     this.userService.signUpUser(this.user).subscribe({
//       next: (data) => {
//         console.log(data);
//         this.router.navigate(['mainpath/Products']);
//       },
//       error: (err) => {
//         console.log(err);
//       },
//     });
//   }
// }
