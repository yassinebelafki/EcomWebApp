import {Component, OnInit} from '@angular/core';
import {CartService} from "../../services/cart.service";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit{
  cartProducts:any[]=[]
  total:number=0;

  isordered:boolean=false;

  loading:boolean=false;

  constructor( private cartService:CartService) {
  }

  getElementsinStrorage(){
    if ("cart" in localStorage){
      this.cartProducts=JSON.parse(localStorage.getItem("cart"))
      console.log(this.cartProducts)
      }
    }

  ngOnInit(): void {
    this.getElementsinStrorage()
    this.getTotalprice()
  }

  getTotalprice(){
    this.total=0
    for (let x in this.cartProducts){
      this.total+=this.cartProducts[x].item.price*this.cartProducts[x].quantity
    }
    return this.total;
  }

  updateCart(){
    localStorage.setItem("cart",JSON.stringify(this.cartProducts));
  }

  deletItem(index){
    this.cartProducts.splice(index,1)
    this.updateCart()
  }

  clearAllItems(){
    this.cartProducts=[]
    this.updateCart()
  }

  order() {
    let productModel=this.cartProducts.map(
      item=>{
        return {productId:item.item.id,quantity:item.quantity}
      }
    )

    let model={
      userId:1,
      date:new Date(),
      products:productModel
    }
    this.loading=true;
    this.cartService.createCart(model).subscribe(res=>{
      this.clearAllItems();
      this.isordered=true;
      this.loading=false;
    });
  }




  }

