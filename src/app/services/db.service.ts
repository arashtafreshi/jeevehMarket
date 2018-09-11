import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { dbArticle } from '../models/dbArticle';
import { promise } from 'protractor';
import { User } from '../models/User';
import { QueryEncoder } from '@angular/http';


const dbUrl: string = "/api/couch/jeevehmarket/";

@Injectable()
export class DbService {
  currentUser: User;

  constructor(private httpClient: HttpClient) { }

  GetDocumentById(docId: string): Observable<dbArticle> {
    return this.httpClient.get<dbArticle>("/api/couch/jeevehmarket/" + docId);
  }

  

  GetAllArticles(): Observable<any> {
    return this.httpClient.get(dbUrl + "_design/article/_view/all");
  }

  

  async Save(newDocument: any): Promise<any> {
    let url = dbUrl;
    delete newDocument["_id"];
    delete newDocument["_rev"];
    let newId: string;

    await this.GetId()
      .then(data => {
        newId = String(data["uuids"][0]);
      })
      .catch(
        error => { console.log(error) }
      );
    return this.httpClient.put(url + newId, JSON.stringify(newDocument)).toPromise();

  }

  async Delete(docId: string): Promise<any> {
    let revId = "";
    await this.GetLatestRevById(docId).then(
      data => {
        revId = data["_rev"];
      },
      error => console.log(error)
    );
    return this.httpClient.delete(dbUrl + docId + "?rev=" + revId).toPromise();
  }

  Update(docId: string, doc: any): Promise<any> {
    let url = dbUrl + doc._id;
    //delete doc['_attachments'];
    //delete doc['_id'];
    return this.httpClient.put(url, JSON.stringify(doc)).toPromise();
  }

  GetSession(): Observable<any> {
    let headers: HttpHeaders = new HttpHeaders({
      "Content-Type": "application/json"
    });

    return this.httpClient
      .post("/api/couch/_session", { "name": "admin", "password": "1CouchdbeBkhod" }, { headers: headers });
  }

  GetId(): Promise<any> {
    return this.httpClient.get("/api/couch/_uuids?count=1").toPromise();
  }

  async Upload(file: any[], id: string): Promise<any> {

    //let url = "/api/couch/jeevehmarket/" + document["_id"] + "/" + file["name"] + "?rev=" + document["_rev"];
    let rev;
    await this.GetLatestRevById(id).then(data => rev = data._rev);

    let url = dbUrl + id + "/" + file["name"] + "?rev=" + rev;
    let fileType = file["type"];
    let headers = new HttpHeaders({
      "content-type": fileType
    });
    return this.httpClient.put(url, file, { headers: headers }).toPromise();


  }

  

  GetLatestRevById(id: string): Promise<any> {
    return this.httpClient.get(dbUrl + id).toPromise();
  }

  


  //curl -X PUT http://admin:1CouchdbeBkhod@localhost:5984/_users/org.couchdb.user:a@b.com  -H "Accept: application/json"  -H "Content-Type: application/json"  -d '{"name": "a@b.com", "password": "1234", "roles": ["jeevehmarket_user"], "type": "user"}'

  

  // see: http://docs.couchdb.org/en/2.0.0/api/server/authn.html#api-auth-cookie
  

}
