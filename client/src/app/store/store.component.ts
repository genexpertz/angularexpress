import {Component} from "@angular/core";
/**
 * Created by admin on 21/03/18.
 */

@Component({
  selector: 'my-store',
  templateUrl: './store.component.html'
})
export class StoreComponent{

  name: string = "ExpertzStore"

  get pageCount(): number {
    //return Math.ceil(this.repository
    //    .getProducts(this.selectedCategory).length / this.productsPerPage)
    return 3;
  }

}
