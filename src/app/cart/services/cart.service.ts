import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private http:HttpClient) { }


  createCart(postData:any){
    return  this.http.post("https://fakestoreapi.com/carts",postData);
  }

  getAllCarts(startDate?:any,endDate?:any){
    let param=new HttpParams();
    param=param.append("startDate",startDate).append("endDate",endDate)
   return  this.http.get("https://fakestoreapi.com/carts",{params:param});
  }

  deleteCart(id){
    return  this.http.delete("https://fakestoreapi.com/carts/"+id)
  }

  getSingleCart(id){
    return this.http.get("https://fakestoreapi.com/carts/"+id)
  }

  getSepcificProduct(id){
    return this.http.get("https://fakestoreapi.com/products/"+id);
  }
}
