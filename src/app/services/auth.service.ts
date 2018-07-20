import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delay';
import { dbArticle } from '../models/dbArticle';
import { User } from '../models/User';
import { HttpClient } from '@angular/common/http';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';


const dbUrl: string = "/api/couch/jeevehmarket/";


@Injectable()
export class AuthService {
  isLoggedIn = localStorage.getItem("isLoggedIn")==="true"?true:false;//localStorage.getItem("currentUser") === "1" ? true : false;
  roles=localStorage.getItem("roles");

  // store the URL so we can redirect after logging in
  redirectUrl: string;

  constructor(private httpClient: HttpClient){ }

  login(): Observable<any>{
    localStorage.setItem("currentUser", "1");
    return Observable.of(true).delay(1000).do(val => this.isLoggedIn = true);
    /*await this._db.verifyLogin(email, password).then(
      data => {
         console.log(data); 
         localStorage.setItem("currentUser", "1");
         return true ; 
        },
      error => { console.error(error); return false; }
    );*/
  }

  logout(): void {
    this.isLoggedIn = false;
    localStorage.setItem("currentUser", "0");
  }


  /*
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    let url: string = state.url;

    return this.isLoggedIn && (this.roles.includes("jeevehmarket_admin"));
  }
  */

}
