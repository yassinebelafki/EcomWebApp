import {Component, OnInit} from '@angular/core';
import {faCoffee, faStar} from '@fortawesome/free-solid-svg-icons';
import {ActivatedRoute} from "@angular/router";
import {ProductsService} from "../../services/products.service";

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit{
  fastare=faStar;

  ItemId:any;
  productInfo:any;
  loading:boolean;

  quantity:number;

  constructor(private activeRoute:ActivatedRoute,private productService:ProductsService) {
    this.ItemId=activeRoute.snapshot.paramMap.get("id");
  }
  ngOnInit() {
    this.getSingleProduct();
  }

  getSingleProduct(){
    this.loading=true;
    this.productService.getSepcificProduct(this.ItemId).subscribe(
      (res:any)=>{
        if (res==null){
          alert("this product does not exist")
        }
        this.loading=false;
        this.productInfo=res;
      },
      (error)=>{
        alert(error.message)
      }
    )
  }

  FetchProductData(){
    this.productService.addItemToCart({"item":this.productInfo,"quantity":this.quantity})
  }

}
