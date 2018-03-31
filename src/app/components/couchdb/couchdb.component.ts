import { Component, OnInit } from '@angular/core';
import { DbService } from '../../services/db.service';

import { dbArticle } from '../../models/dbArticle';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-couchdb',
  templateUrl: './couchdb.component.html',
  styleUrls: ['./couchdb.component.css'],
  providers: [DbService]
})
export class CouchdbComponent implements OnInit {
  document: string = "";
  allDocs: string = "";
  dbArticle:dbArticle= new dbArticle();

  constructor(private _db: DbService) { }

  ngOnInit() {
    this.allDocs = JSON.stringify(this.getAllDocuments());
  }

  getArticle(docId: string) {
    let article:dbArticle;
    this._db.GetArticle(docId).subscribe(
      data => {
        console.log('success', data);
        this.document = data["type"];
        article=data;
        console.log(article);
      },
      error => console.log('oops', error)
    );
  }

  getAllDocuments(): any {
    this._db.GetAllDocument().subscribe(
      data => { return data; },
      error => { return error; }
    );
  }

  addDbArticle(){
    console.log("adding dbArticle", this.dbArticle);
    this._db.SaveDocument(this.dbArticle).then(
      data=>{console.log(data)},
      error=>{console.log(error)}
    );
  }

  GetSession(){
    this._db.GetSession().subscribe(
      data=>{console.log(data)},
      error=>{console.log(error)}
    );
  }

}
