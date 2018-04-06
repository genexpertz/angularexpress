import { IProduct } from "./Iproduct";


export class Product implements IProduct{

    constructor(public productId:number, public productName:string, public skuId:string){

    }
}
