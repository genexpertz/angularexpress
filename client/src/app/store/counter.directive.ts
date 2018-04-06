import {Directive, Input, SimpleChanges, TemplateRef, ViewContainerRef} from "@angular/core";
/**
 * Created by admin on 22/03/18.
 */

@Directive({
 selector: "[cnt]"
})
export class CounterDirective {

  @Input("cntOf")
  counter: number

  constructor(private container: ViewContainerRef, private template: TemplateRef<Object>){

  }

  ngOnChanges(changes: SimpleChanges){
    this.container.clear();
    for(let i=0; i < this.counter; i++){
      this.container.createEmbeddedView(this.template, new CounterDirectiveContext(i+1))
    }
  }}


class CounterDirectiveContext{
  constructor(public $implicit:any){}
}
