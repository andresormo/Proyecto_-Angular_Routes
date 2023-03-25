import { BikeListRoutingModule } from './bike-list-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BikeListComponent } from './bike-list.component';
import { ProductComponent } from './components/product/product.component';



@NgModule({
  declarations: [
    BikeListComponent,
    ProductComponent
  ],
  imports: [
    CommonModule,
    BikeListRoutingModule
  ],
  exports: [
    BikeListComponent
  ]
})
export class BikeListModule { }
