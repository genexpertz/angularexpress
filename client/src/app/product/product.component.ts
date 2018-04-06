/**
 * Created by admin on 16/03/18.
 */

import {Component, Output, Input, OnChanges, OnInit, SimpleChanges, EventEmitter} from "@angular/core";

import {ProductService} from "./ProductService";

@Component({
  selector: 'store-product',
  templateUrl: './product.component.html',
  providers: [ProductService]
})

export class ProductComponent implements OnInit {

  firstName

  _productService: ProductService;
  data

  constructor() {

  }

  ngOnInit() {


  }
}
