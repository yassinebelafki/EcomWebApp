import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  cartProducts:any[]=[]
  constructor(private http:HttpClient) { }

  getAllproduct(){
    return this.http.get("https://fakestoreapi.com/products");
  }

  getAllCategories(){
    return this.http.get("https://fakestoreapi.com/products/categories");
  }

  getSpecificCategorie(categorie:string){
    return this.http.get("https://fakestoreapi.com/products/category/"+categorie)
  }

  getSepcificProduct(id){
    return this.http.get("https://fakestoreapi.com/products/"+id);
  }

  addItemToCart(newitemData){
    //first we will fetch the data existing in the localstorage then we gonna modifie it
    //in our cartproduct array then we gonna push it again
    if ("cart" in localStorage){
      this.cartProducts=JSON.parse(localStorage.getItem("cart"))
      let itemexisted=this.cartProducts.find(item=>item.item.id==newitemData.item.id)
      if (itemexisted){
        alert("this item is already in your cart")
      }
      else {
        this.cartProducts.push(newitemData)
        localStorage.setItem("cart",JSON.stringify(this.cartProducts))
      }
    }
    else  {
      this.cartProducts.push(newitemData)
      localStorage.setItem("cart",JSON.stringify(this.cartProducts))
    }

  }
}
