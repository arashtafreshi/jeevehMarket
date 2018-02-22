import { Component, OnInit, AfterViewInit, OnDestroy, ComponentFactoryResolver } from '@angular/core';
import { StripeDirective } from '../../directives/stripe.directive';

@Component({
  selector: 'app-stripe',
  templateUrl: './stripe.component.html',
  styleUrls: ['./stripe.component.css']
})
export class StripeComponent implements OnInit  {

  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  ngOnInit() {
  }

}
