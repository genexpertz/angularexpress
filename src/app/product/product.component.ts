/**
 * Created by admin on 16/03/18.
 */

import {Component, Output, Input, OnChanges, OnInit, SimpleChanges, EventEmitter} from "@angular/core";
import { Router } from "@angular/router";
import { IProduct } from "./Iproduct";
import { Product } from "./Product";
import {ProductPushService} from "./ProductPushService";
import {ProductService} from "./ProductService";
import {Observable} from "rxjs/Observable";
import {map} from "rxjs/operator/map";
import {observable} from "rxjs/symbol/observable";


@Component({
  selector: 'store-product',
  templateUrl: './product.component.html',
  providers:[ProductService],
  inputs : ['count'],
  outputs : ['produce']
})

export class ProductComponent implements OnInit, OnChanges{


    count:number = 1

    produce: EventEmitter<any> = new EventEmitter();

    constructor( private _productService: ProductService) {

    }

    ngOnInit(){

      //this._productService.getproducts()
      //  .subscribe( oProducts => this.products = oProducts)
    }

    goBack(){

    }

    ngOnChanges(changes: SimpleChanges) {
      this.countDown()
      console.log(`ngOn Changed Detected *8***`);
    }

    countDown() {

      //alert(this.count)

      if(this.count > 0) {
        this.count--;
        setTimeout(() => {
          console.log('Test')
          this.countDown()
        }, 1000);
      } else {
        this.produce.emit("Hello")
      }

    }




  // Beware! Called frequently!
  // Called in every change detection cycle anywhere on the page
  ngDoCheck() { console.log(`DoCheck`); }

  ngAfterContentInit() { console.log(`AfterContentInit`);  }

  // Beware! Called frequently!
  // Called in every change detection cycle anywhere on the page
  ngAfterContentChecked() { console.log(`AfterContentChecked`); }

  ngAfterViewInit() { console.log(`AfterViewInit`); }

  // Beware! Called frequently!
  // Called in every change detection cycle anywhere on the page
  ngAfterViewChecked() { console.log(`AfterViewChecked`); }

  ngOnDestroy() { console.log(`OnDestroy`); }

}
