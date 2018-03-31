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

  googleAds: any = "http//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"

  constructor(private _db:DbService, private sanitizer: DomSanitizer) { }

  ngOnInit() {
    this._db.GetAllDocument().subscribe((data)=>this.articles=data.rows);


    this.googleAds = this.sanitizer.bypassSecurityTrustResourceUrl(this.googleAds);
    const fragment = document.createRange().createContextualFragment(`<script [src]="`+this.googleAds+`"></script>`);
    document.head.appendChild(fragment);
  }

}
