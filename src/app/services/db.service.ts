import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { dbArticle } from '../models/dbArticle';
import { promise } from 'protractor';

@Injectable()
export class DbService {

  constructor(private httpClient: HttpClient) { }

  GetArticle(docId: string): Observable<dbArticle> {
    return this.httpClient.get<dbArticle>("/api/couch/jeevehmarket/" + docId);
  }

  GetAllDocument(): Observable<any> {
    return this.httpClient.get("/api/couch/jeevehmarket/_design/article/_view/all");
  }

  async SaveDocument(newDocument: any): Promise<any> {
    let url = "/api/couch/jeevehmarket/";
    console.log(url);
    delete newDocument["_id"];
    delete newDocument["_rev"];
    console.log("parsed object: ", JSON.stringify(newDocument));
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

  DeleteDocument(docId: string): Observable<any> {
    let revId = "";
    this.GetArticle(docId).subscribe(
      data => {
        revId = data["rev"]
      },
      error => console.log(error)
    );
    return this.httpClient.delete("/api/couch/jeevehmarket/" + docId + "?rev=" + revId);
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

  Upload(event: any[], document: any): Observable<any> {
    for (let i = 0; i < event["files"].count; i++) {
      let file = event["files"][i]
      //let url = "/api/couch/jeevehmarket/" + document["_id"] + "/" + file["name"] + "?rev=" + document["_rev"];
      let url = "/api/couch/jeevehmarket/"+document["_id"]+"/"+file["name"]+"?rev="+document["_rev"];
      let fileType = file["type"];
      let headers = new HttpHeaders({
        "content-type": fileType
      });
      return this.httpClient.put(url, file, { headers: headers });
    }

  }

}
