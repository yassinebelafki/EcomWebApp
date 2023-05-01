import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.css']
})
export class SingleProductComponent {
  @Input() product:any;
  @Output() item=new EventEmitter();
  quantity:number;

  toggleAddCart=false;
  FetchProductData(){
      this.item.emit({"item":this.product,"quantity":this.quantity})
  }
}
