import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllProductsComponent } from './components/all-products/all-products.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {HttpClientModule} from "@angular/common/http";
import {SharedModule} from "../shared/shared.module";
import { SingleProductComponent } from './components/single-product/single-product.component';
import {FormsModule} from "@angular/forms";
import {RouterLink} from "@angular/router";



@NgModule({
  declarations: [
    AllProductsComponent,
    ProductDetailsComponent,
    SingleProductComponent
  ],
  exports: [
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    HttpClientModule,
    SharedModule,
    FormsModule,
    RouterLink
  ]
})
export class ProductsModule { }
