import { Component, OnInit } from '@angular/core';

import { dbArticle } from '../../models/dbArticle';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { catchError, map, tap } from 'rxjs/operators';

import { DomSanitizer, SafeHtml, SafeStyle, SafeScript, SafeUrl, SafeResourceUrl } from '@angular/platform-browser';
import { Url } from 'url';
import { DbService } from '../../services/db.service';

@Component({
  selector: 'app-home-master',
  templateUrl: './home-master.component.html',
  styleUrls: ['./home-master.component.css'],
  providers:[DbService]
})
export class HomeMasterComponent implements OnInit {
  articles:dbArticle[];

  html: string;
  htmlLink: string;
  htmlLink2: any;
  checkout: any = `
  <script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
  <script>(adsbygoogle = window.adsbygoogle || []).push({
    google_ad_client: "ca-pub-1028565628417803",
    enable_page_level_ads: true
  });</script>
  
  `

  googleAds: any = "http//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"

  constructor(private _db:DbService, private sanitizer: DomSanitizer) { }

  ngOnInit() {
    this._db.GetAllArticles().subscribe((data)=>this.articles=data.rows);


    //this.googleAds = this.sanitizer.bypassSecurityTrustResourceUrl(this.googleAds);
    //const fragment = document.createRange().createContextualFragment(`<script [src]="`+this.googleAds+`"></script>`);
    //document.head.appendChild(fragment);




    //this.html = `<script type="text/javascript" src="https://js.stripe.com/v3/"></script><script>var elements = stripe.elements();</script>`;
    this.htmlLink = "//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js";
    this.htmlLink2 = this.sanitizer.bypassSecurityTrustResourceUrl("//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js");
    this.checkout = this.sanitizer.bypassSecurityTrustHtml(this.checkout);
    const fragment = document.createRange().createContextualFragment(this.checkout);
    document.getElementById("myGoogleAdSense").innerHTML = "";
    document.getElementById("myGoogleAdSense").appendChild(fragment);



  }


  

}
