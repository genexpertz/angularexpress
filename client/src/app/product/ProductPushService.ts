import {Injectable} from "@angular/core";
import {IProduct} from "./IProduct";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {catchError} from "rxjs/operators";
/**
 * Created by admin on 20/03/18.
 */

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};


@Injectable()
export class ProductPushService{

  _http:HttpClient

  constructor(_http:HttpClient){
    this._http = _http
  }

  pushProducts(data: IProduct) {

    alert(this._http)
    //this._http.request(new Request({method: 'post',
    //  url: 'http://localhost:4200/product/',
    //  body: {'test': '123'}})).map( response => response.json());
  }

}
