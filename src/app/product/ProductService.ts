/**
 * Created by admin on 16/03/18.
 */
import { Injectable } from '@angular/core';
import { Response } from '@angular/http';
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
  private _errorMessage: string

  constructor(private _http: HttpClient){}

  getproducts(): Observable<IProduct[]> {

    return this._http.get(this._producturl).map( data => <IProduct[]> data)
  }

}


