import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { User } from '../models/User';

const dbUrl: string = "/api/couch/jeevehmarket/";

@Injectable()
export class UserService {
  currentUser: User;

  constructor(private httpClient: HttpClient) { }

  GetAllUsers(): Observable<any> {
    return this.httpClient.get(dbUrl + "_design/user/_view/all");
  }

  GetUserById(docId: string): Observable<User> {
    return this.httpClient.get<User>("/api/couch/jeevehmarket/" + docId);
  }

  createNewUser(name, password): Promise<any> {
    let headers = new HttpHeaders({
      "content-type": "application/json",
      "accept": "application/json",
      "Authorization": "Basic " + btoa("admin:1CouchdbeBkhod")
    });
    let data = { "name": name, "password": password, "roles": ["jeevehmarket_user"], "type": "user" };

    return this.httpClient.put("/api/couch/_users/org.couchdb.user:" + name, data, { headers: headers }).toPromise();
  }

  // see: http://docs.couchdb.org/en/2.0.0/api/server/authn.html#api-auth-cookie
  login(username: string, password: string): Promise<any> {
    let headers = new HttpHeaders({
      "content-type": "application/json"//,
      //"Authorization": "Basic " + btoa("admin:1CouchdbeBkhod")
    });
    let data = {
      name: username,
      password: password
    }
    return this.httpClient.post("/api/couch/_session", data, { headers: headers }).toPromise();
  }

  //curl -X PUT http://admin:1CouchdbeBkhod@localhost:5984/_users/org.couchdb.user:a@b.com  -H "Accept: application/json"  -H "Content-Type: application/json"  -d '{"name": "a@b.com", "password": "1234", "roles": ["jeevehmarket_user"], "type": "user"}'
  newAdmin(username: string, password: string): Promise<any> {
    let headers = new HttpHeaders({
      "content-type": "application/json",
      "Authorization": "Basic " + btoa("admin:1CouchdbeBkhod")
    });
    let data = {
      "admins": {
        "names": [],
        "roles": []
      },
      "members": {
        "names": ["jan"],
        "roles": []
      }
    }
    return this.httpClient.put(dbUrl + "jeevehmarket/_security", data, { headers: headers }).toPromise();
  }

  verifyLogin(email: string, password: string): Promise<any> {
    let httpParams = new HttpParams()
      .append("group", "true")
      .append("key", email);

    return this.httpClient.get(dbUrl + "_design/user/_view/login?" + httpParams).toPromise();
  }

  // end of class
}
