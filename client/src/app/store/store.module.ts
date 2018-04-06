import {NgModule} from "@angular/core";
import {StoreComponent} from "./store.component";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";
import {CounterDirective} from "./counter.directive";
/**
 * Created by admin on 21/03/18.
 */

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [StoreComponent],
  exports: [StoreComponent]
})
export class StoreModule{

}
