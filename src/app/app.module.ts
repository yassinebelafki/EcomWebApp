import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {RouterOutlet, Routes} from "@angular/router";
import {SharedModule} from "./shared/shared.module";
import {ProductsModule} from "./products/products.module";
import {AllProductsComponent} from "./products/components/all-products/all-products.component";
import {ProductDetailsComponent} from "./products/components/product-details/product-details.component";
import {CartComponent} from "./cart/components/cart/cart.component";
import {AppRoutingModule} from "./app-routing.module";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {HttpClientModule} from "@angular/common/http";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {CartModule} from "./cart/cart.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterOutlet,
    SharedModule,
    AppRoutingModule,
    FontAwesomeModule,
    NgbModule,
    CartModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
