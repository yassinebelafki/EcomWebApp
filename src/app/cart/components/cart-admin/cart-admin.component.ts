import {Component, OnInit} from '@angular/core';
import {CartService} from "../../services/cart.service";
import {FormControl, FormGroup} from "@angular/forms";
import {faX} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-cart-admin',
  templateUrl: './cart-admin.component.html',
  styleUrls: ['./cart-admin.component.css']
})
export class CartAdminComponent implements OnInit{
loading:boolean=false;

viewed:boolean=false;

  carts:any[];
  myform:FormGroup;

  fax=faX;

  cartDetails:any;
  cartDetailsFinal:any[]=[];

  fullTotal:number=0;
  constructor(private cartService:CartService) {
  }
  ngOnInit(): void {
    this.getAllCarts();
this.myform=new FormGroup<any>(
  {start:new FormControl(),
          end:new FormControl()}
)
  }


  getAllCarts(){
    this.cartService.getAllCarts().subscribe(
      (res:any[])=>{
        this.carts=res;
      }
    )
  }

  fetchDate(){
    this.cartService.getAllCarts(this.myform.value.start,this.myform.value.end).subscribe(
      (res:any[])=>{
        console.log(res)
      }
    )
}

  onView(cartindex){
    this.viewed=true;
    this.cartDetailsFinal=[]
      this.cartDetails=this.carts[cartindex]
    for (let x in this.cartDetails.products){
      this.cartService.getSepcificProduct(this.cartDetails.products[x].productId).subscribe(
        (res:any)=>{
          console.log(res)
          this.cartDetailsFinal.push({name:res.title,
            quantity:this.cartDetails.products[x].quantity,
            price:res.price,
            total:res.price*this.cartDetails.products[x].quantity
          }
          )
          this.fullTotal=this.fullTotal+res.price*this.cartDetails.products[x].quantity;

        }
      );

    }
    console.log(this.cartDetailsFinal);
  }


  deleteCart(cartId){
    this.cartService.deleteCart(cartId).subscribe(
      (res:any)=>{
        this.cartDetails=res;
      }
    );



  }


}
