/**
 * Created by admin on 16/03/18.
 */
import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable, ObservableInput} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/observable/throw';
import { IProduct } from './Iproduct';
import {HttpClient} from "@angular/common/http";

@Injectable()
export class ProductService {

  private _producturl='products.json';
  private _skuUrl = 'sku.json'

  private _errorMessage: string

  constructor(private _http: Http){}

  getproduct(productName:string){

    const promise = new Promise((resolve, reject) => {
      this._http.get(this._producturl)
        .toPromise()
        .then(                                                                                        
          res => { // Success
            console.log(res.json());
            resolve();
          }
        );
    });
    return promise;

  }
  getSku(skuId:string){

    const promise = new Promise((resolve, reject) => {
      this._http.get(this._producturl+"skuId")
        .toPromise()
        .then(
          res => { // Success
            console.log(res.json());
            resolve();
          }
        );
    });
    return promise;
}
  getPrice(skuID:string){
    const promise = new Promise((resolve, reject) => {
      this._http.get(this._skuUrl)
        .toPromise()
        .then(
          res => { // Success
            console.log(res.json());
            resolve();
          }
        );
    });
    return promise;

  }

}


