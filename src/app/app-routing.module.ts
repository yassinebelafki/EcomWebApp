import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {AllProductsComponent} from "./products/components/all-products/all-products.component";
import {ProductDetailsComponent} from "./products/components/product-details/product-details.component";
import {CartComponent} from "./cart/components/cart/cart.component";
import {CartAdminComponent} from "./cart/components/cart-admin/cart-admin.component";




const route:Routes =[
  {path:"products",component:AllProductsComponent},
  {path:"details/:id",component:ProductDetailsComponent},
  {path:"cart",component:CartComponent},
  {path:"admin/cart",component:CartAdminComponent},
  {path:"**",redirectTo:"products"}
]

@NgModule({
  imports : [
    RouterModule.forRoot(route)
  ],
  exports :[RouterModule]
})
export class AppRoutingModule {

}
