import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrackOrdersComponent } from './track-orders/track-orders.component';
import { OrderDetailsComponent } from './order-details/order-details.component';
import { RouterModule, Routes } from '@angular/router';

const routes : Routes =[
  {path :'track-order' , component : TrackOrdersComponent , title : "trake order page "},
  {path : "order details" , component :   OrderDetailsComponent , title : "order details page" }
]

@NgModule({
  declarations: [
    TrackOrdersComponent,
    OrderDetailsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)  
  ]
})
export class OrdersModule { }
