import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './component/main/main.component';
import { ProductsComponent } from './component/products/products.component';
import { ProductParentComponent } from './component/product-parent/product-parent.component';
import { NotFoundComponent } from './component/not-found/not-found.component';
import { GroupOfRoutesComponent } from './component/group-of-routes/group-of-routes.component';
import { AboutAsComponent } from './component/about-as/about-as.component';
import { ProductDetailsComponent } from './component/product-details/product-details.component';
import { UserAuthenComponent } from './component/user-authen/user-authen.component';
import { UserTempleteDrivenComponent } from './component/Users/user-templete-driven/user-templete-driven.component';
import { UserReactiveTempletComponent } from './component/Users/user-reactive-templet/user-reactive-templet.component';
import { userGuard } from './Guards/user.guard';
import { AdminComponent } from './component/admin/admin.component';

const routes: Routes = [
  // Default path
  {
    path: 'mainpath',
    component: GroupOfRoutesComponent,
    children: [
      { path: '', component: ProductsComponent, title: 'products' },
      { path: 'Home', component: MainComponent, title: 'Home Page' },
      { path: 'Products', component: ProductsComponent, title: 'Product Page' },
      {
        path: 'Product Parent',
        component: ProductParentComponent,
        title: 'Product Parent Page',
        canActivate: [userGuard] ,
      },{
        path: 'AboutAs',
        component:AboutAsComponent,
        title: 'About As Page',
      }
    ],
  },
  {path :'productdetails/:idprod' , component :  ProductDetailsComponent , title:'product Details'},
  
  
  // to do lazy loading once i go to it it start 
  {
    path : "Order" ,
    loadChildren: () => import ('src/app/component/orders/orders.module') .then(m=>m.OrdersModule)
  }
  ,   {
    path : 'userlogin'  , component :UserAuthenComponent , title : "login "
  },   {
    path : 'userlogout'  , component :UserAuthenComponent , title : "logout "
  }
  ,{
    path : 'usertempletdriven'  , component :UserTempleteDrivenComponent , title : "UserTempleteDrivenComponent "
  }
  ,
   {
    path : 'usereactive'  , component :UserReactiveTempletComponent , title : "UserReactiveComponent"
  },
  {
    path : 'useradmin'  , component :  AdminComponent , title : "Admin"
  },
  // Not Fount page 404 , Wiled card path
  //  must be in the last becase it do (first wins )
  { path: '**', component: NotFoundComponent, title: 'Not found 404' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
