"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * Created by admin on 16/03/18.
 */
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
require("rxjs/add/operator/map");
require("rxjs/add/operator/do");
require("rxjs/add/operator/catch");
require("rxjs/observable/throw");
var observeOn_1 = require("rxjs/operator/observeOn");
var ProductService = (function () {
    function ProductService(_http) {
        this._http = _http;
        this._producturl = 'app/products.json';
    }
    ProductService.prototype.getproducts = function () {
        var _this = this;
        return this._http.get(this._producturl)
            .map(function (response) { return response.json(); })
            .do(function (data) { return console.log(JSON.stringify(data)); })
            .catch(function (e) { return _this.handleError(e); });
    };
    ProductService.prototype.handleError = function (error) {
        console.log("in Handle error" + typeof (error));
        console.error("Error Text:" + error.toString());
        if (error.toString().endsWith("products.json")) {
            this._errorMessage = new observeOn_1.ObserveOnMessage("Products Not Found From Server");
        }
        return ;
        throw (error);
    };
    return ProductService;
}());
ProductService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], ProductService);
exports.ProductService = ProductService;
//# sourceMappingURL=ProductService.js.map