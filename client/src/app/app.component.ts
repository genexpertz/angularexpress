import {Component, OnInit} from '@angular/core';
import {ProductService} from "./product/ProductService";
import {IProduct} from "./product/IProduct";
import {ProductPushService} from "./product/ProductPushService";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [ ProductService]

})
export class AppComponent implements OnInit {

  name = 'Expertzlab';
  iproducts: IProduct[];
  h:string

  initialCount:number = 4

  ngOnInit(): void {
    //this._product.getproducts()
    //  .subscribe(iproducts => this.iproducts = iproducts);
  }

  onCountComplete(){
    alert(this.h)
  }

}
