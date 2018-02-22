import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appStripe]'
})
export class StripeDirective {

  constructor(public viewContainerRef:ViewContainerRef) { }

}
