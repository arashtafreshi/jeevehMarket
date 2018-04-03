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
  currentUser:User;

  constructor(private httpClient: HttpClient) { }

  GetDocumentById(docId: string): Observable<dbArticle> {
    return this.httpClient.get<dbArticle>("/api/couch/jeevehmarket/" + docId);
  }

  GetAllArticles(): Observable<any> {
    return this.httpClient.get(dbUrl + "_design/article/_view/all");
  }

  GetAllUsers(): Observable<any> {
    return this.httpClient.get(dbUrl + "_design/user/_view/all");
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

  Update(docId: string, doc:any): Promise<any> {
    return this.httpClient.put(dbUrl + doc["_id"], JSON.stringify(doc)).toPromise();
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

  async Upload(event: any[], id: string): Promise<any> {
    for (let i = 0; i < event["files"].count; i++) {
      let file = event["files"][i]
      //let url = "/api/couch/jeevehmarket/" + document["_id"] + "/" + file["name"] + "?rev=" + document["_rev"];
      let rev;
      await this.GetLatestRevById(id).then(data => rev = data);

      let url = dbUrl + id + "/" + file["name"] + "?rev=" + rev;
      let fileType = file["type"];
      let headers = new HttpHeaders({
        "content-type": fileType
      });
      this.httpClient.put(url, file, { headers: headers });
    }
  }

  verifyLogin(email:string, password:string):Promise<any>{
    let httpParams = new HttpParams()
    .append("group","true")
    .append("key",email);

    return this.httpClient.get(dbUrl + "_design/user/_view/login?"+httpParams).toPromise();
  }

  GetLatestRevById(id: string): Promise<any> {
    return this.httpClient.get(dbUrl + id).toPromise();
  }

}