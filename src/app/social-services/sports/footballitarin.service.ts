import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import { promise } from 'selenium-webdriver';

const _siteLink:string = '/footballitarin';

@Injectable()
export class FootballitarinService {

  GetNewArticles():Promise<string>{
    let dt: string;

    let h = new HttpHeaders();
    
    h = h.set('Access-Control-Allow-Methods', 'GET,POST');
    h = h.set('Access-Control-Allow-Headers', 'Cache-Control, Pragma, Origin, Authorization, Content-Type, X-Requested-With, Access-Control-Allow-Origin');
    //h = h.set('Access-Control-Request-Headers', 'accept, content-type');
    h = h.set('Access-Control-Allow-Origin', '*');
    this.http.get(_siteLink, { headers: h }).subscribe(resp => {
      //console.log(resp as string);
      //console.log("req");
      //console.log(resp);
    },
      err => {
        console.log('Something went wrong!');
        console.log(err);
      });

      return Promise.resolve('hello');
  }

  constructor(private http: HttpClient) { }

}
