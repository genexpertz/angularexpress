import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent }  from './app.component';
import {Routes, RouterModule} from "@angular/router";
import {ProductComponent} from "./product/product.component";
import {InventoryComponent} from "./inventory/inventory.component";
import { StockComponent } from './stock/stock.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import {HttpClientModule} from "@angular/common/http";
import {StoreModule} from "./store/store.module";
import {NgxPaginationModule} from "ngx-pagination";
import {MultipyPipe} from "./product/multiplier.pipe";
import {CounterDirective} from "./store/counter.directive";
import {HttpModule} from "@angular/http";

/*
const appRoutes: Routes = [
  {path:'Product',component: ProductComponent},
  {path:'Inventory', component: InventoryComponent},
  {path:'',component:PageNotFoundComponent}
];
*/
@NgModule({
  imports:      [ NgxPaginationModule, StoreModule, BrowserModule, FormsModule ],
  declarations: [ CounterDirective, MultipyPipe, AppComponent,
    ProductComponent, InventoryComponent, StockComponent, PageNotFoundComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
