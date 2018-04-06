import {Pipe, PipeTransform} from "@angular/core";
/**
 * Created by admin on 22/03/18.
 */

@Pipe({
  name: 'multiplier'
})
export class MultipyPipe implements PipeTransform{
  transform(value:number, multiply:string):number{
    let mul = parseFloat(multiply)
    return value * mul;
  }
}
