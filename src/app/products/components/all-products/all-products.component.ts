import {Component, OnInit} from '@angular/core';
import {ProductsService} from "../../services/products.service";

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css']
})
export class AllProductsComponent implements OnInit{

  productsList:any[]=[]
  categories:any[]=[]
  loading:boolean=false;
  constructor(private productService:ProductsService) {
  }

  ngOnInit(): void {
    this.listAllProduct();
    this.listAllCategories()
  }


listAllProduct(){
    this.loading=true;
  this.productService.getAllproduct().subscribe(
    (res:any[])=>{
      this.loading=false;
      this.productsList=res;
    },error => {
      alert(error.message)
    }
  )
}

listAllCategories(){

    this.productService.getAllCategories().subscribe(
      (res:any[])=>{
        this.categories=res;
      },error => {
        alert(error.message)
      }
    )
}

  fliterByCategorie(event){
    let categorie:string=event.target.value;
    if (categorie=="all"){
      this.listAllProduct();
    }
    else {
      this.getSpecificCategorie(categorie);
    }
  }

  getSpecificCategorie(categorie:string){
    this.loading=true
    this.productService.getSpecificCategorie(categorie).subscribe(
      (res: any) => {
        this.loading=false
        this.productsList = res;
      }
    )
  }

  addItemToCart(newitemData){
   this.productService.addItemToCart(newitemData);
  }



}
