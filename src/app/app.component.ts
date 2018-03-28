import {Component, OnInit} from '@angular/core';
import {ProductService} from "./product/ProductService";
import {IProduct} from "./product/IProduct";
import {ProductPushService} from "./product/ProductPushService";

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  providers: [ ProductPushService]

})
export class AppComponent implements OnInit {

  name = 'Expertzlab';
  iproducts: IProduct[];
  h:string

  initialCount:number = 4
  constructor(private _productPushService: ProductPushService) {
    this._productPushService = _productPushService;
  }

  ngOnInit(): void {
    //this._product.getproducts()
    //  .subscribe(iproducts => this.iproducts = iproducts);
  }

  onCountComplete(){
    alert(this.h)
  }

}
