import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { UserAuthenService } from '../Services/user-authen.service';

export const userGuard: CanActivateFn = (route, state) => {
  // return true;
  const userService = inject (UserAuthenService);
  const router = inject(Router) ;
  console.log(userService.isUserLogged);
  
  if (userService.isUserLogged ){
    return true ; 
  }else{
    router.navigate(['/userlogin']);
    return false ;
  } 
};
// Guard عباره عن حمايه لحاجه من الحاجت بعمل 
// Canactivate  عل الروتت بتاع الحاجه دي ل
//  لو true بيظهر كل حاجه 

//  لو false بيقفل الصفحخه 

