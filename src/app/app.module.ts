import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { MainComponent } from './component/main/main.component';
import { FooterComponent } from './component/footer/footer.component';
import { ProductsComponent } from './component/products/products.component';
import { HeaderComponent } from './component/header/header.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ImgStyleDirective } from './component/Directives/img-style.directive';
import { CalDiscountPipe } from './component/Pipes/cal-discount.pipe';
import { ProductParentComponent } from './component/product-parent/product-parent.component';
import { AboutAsComponent } from './component/about-as/about-as.component';
import { NotFoundComponent } from './component/not-found/not-found.component';
import { GroupOfRoutesComponent } from './component/group-of-routes/group-of-routes.component';
import { ProductDetailsComponent } from './component/product-details/product-details.component';
import { HttpClientModule } from '@angular/common/http';
import { UserAuthenComponent } from './component/user-authen/user-authen.component';
import { UserTempleteDrivenComponent } from './component/Users/user-templete-driven/user-templete-driven.component';
import { UserReactiveTempletComponent } from './component/Users/user-reactive-templet/user-reactive-templet.component';
import { AdminComponent } from './component/admin/admin.component';
import { ServiceWorkerModule } from '@angular/service-worker';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MainComponent,
    FooterComponent,
    ProductsComponent,
    HeaderComponent,
    ImgStyleDirective,
    CalDiscountPipe,
    ProductParentComponent,
    AboutAsComponent,
    NotFoundComponent,
    GroupOfRoutesComponent,
    ProductDetailsComponent,
    UserAuthenComponent,
    UserTempleteDrivenComponent,
    UserReactiveTempletComponent,
    AdminComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }),
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
