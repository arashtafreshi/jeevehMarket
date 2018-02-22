import {
  Component,
  OnInit,
  Pipe, PipeTransform
} from '@angular/core';
import { NgForm } from '@angular/forms';

import {DomSanitizer, SafeHtml, SafeStyle, SafeScript, SafeUrl, SafeResourceUrl} from '@angular/platform-browser';
import { Url } from 'url';


@Component({
  selector: 'app-user-payment-order',
  templateUrl: './user-payment-order.component.html',
  styleUrls: ['./user-payment-order.component.css']
})

export class UserPaymentOrderComponent implements OnInit {
  html: string;
  htmlLink:string;
  htmlLink2:any;

  checkout:any=`<form action="your-server-side-code" method="POST">
  <script
    src="https://checkout.stripe.com/checkout.js" class="stripe-button"
    data-key="pk_test_6pRNASCoBOKtIshFeQd4XMUh"
    data-amount="999"
    data-name="Stripe.com"
    data-description="Widget"
    data-image="https://stripe.com/img/documentation/checkout/marketplace.png"
    data-locale="auto"
    data-zip-code="true">
  </script>
</form>
  
  `
  
  

  constructor(private sanitizer: DomSanitizer) { }

  
  ngOnInit() {
    this.html = `<script type="text/javascript" src="https://js.stripe.com/v3/"></script><script>var elements = stripe.elements();</script>`;
    this.htmlLink  = "https://js.stripe.com/v3/";
    this.htmlLink2  = this.sanitizer.bypassSecurityTrustResourceUrl("https://js.stripe.com/v3/");
    this.checkout = this.sanitizer.bypassSecurityTrustHtml(this.checkout);

    const fragment = document.createRange().createContextualFragment(this.checkout);
    document.body.appendChild(fragment);

  }


}
