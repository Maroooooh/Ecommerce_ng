import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Users } from 'src/app/Models/users';
import { UsersService } from 'src/app/Services/users.service';

@Component({
  selector: 'app-user-reactive-templet',
  templateUrl: './user-reactive-templet.component.html',
  styleUrls: ['./user-reactive-templet.component.scss']
})
export class UserReactiveTempletComponent {
  userForm: FormGroup;
  user: Users = {} as Users;
  constructor(private userService: UsersService, private router: Router,private formbuilder: FormBuilder) {
   
      this.userForm = this.formbuilder.group({
        fullName: ['', [Validators.required, Validators.minLength(5)]], // Full Name
        email: ['', [Validators.required, Validators.email]], // Email
        mobile: this.formbuilder.array([this.getcontrol()]),  // Mobile Numbers
        // address: this.formbuilder.group({
        //   city: ['', Validators.required], // City
        //   postalCode: ['', Validators.required], // Postal Code
        //   street: ['', Validators.required], // Street
        // }),
        password: ['', [Validators.required, Validators.minLength(6)]] , // Password
        confirmPassword: ['', Validators.required], // Confirm Password
      });
  
  }
  get mobile(){
    return <FormArray>this.userForm.get('mobile')
  }
  
  add(){
    this.mobile.push(this.getcontrol())
  }
  getcontrol() :FormGroup{
    return this.formbuilder.group({
      mobile:['', [Validators.required, Validators.pattern('[0-9]{11}')]]
    })
  }
  remove(i:number):void{
    const mobileArray = this.userForm.get('mobile') as FormArray;
      mobileArray.removeAt(i);
  }
  // get city(){
  //   return this.userForm.get('address.city');
  // }
  // get postalCode(){
  //   return this.userForm.get('address.postalCode');
  // }
  // get street(){
  //   return this.userForm.get('address.street');
  // }
  addNewUser() {
   
    this.userService.signUpUser(this.user).subscribe({
      next: (data) => {
        console.log(data);
        // this.router.navigate(['mainpath/Products']);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
  get fullName(){
    return this.userForm.get('fullName');
  }
}
