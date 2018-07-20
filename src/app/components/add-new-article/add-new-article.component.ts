import { Component, OnInit, Output, EventEmitter, OnChanges, SimpleChange } from '@angular/core';
import { ArticleModel } from '../article-thumbnail/article-model';
import { NgForm } from '@angular/forms';
import { dbArticle } from '../../models/dbArticle';
import { DbService } from '../../services/db.service';


import {EditorModule} from "primeng/components/editor/editor";
 import {SharedModule} from "primeng/components/common/shared";



@Component({
  selector: 'app-add-new-article',
  templateUrl: './add-new-article.component.html',
  styleUrls: ['./add-new-article.component.css'],
  providers: [DbService]
})
export class AddNewArticleComponent implements OnInit, OnChanges {
  testimage = "";
  fileToUpload: File = null;
  article: dbArticle = new dbArticle();

  urlToUpload:string;

  @Output() onArticleChanged: EventEmitter<dbArticle> = new EventEmitter<dbArticle>();

  addArticle(): void {
    console.log("adding dbArticle", this.article);
    this._db.Save(this.article).then(
      data=>{console.log(data)},
      error=>{console.log(error)}
    );
  }

  constructor( private _db: DbService) { }

  ngOnInit() {
    this.onArticleChanged.emit(this.article);
  }

  ngOnChanges(changes: { [propKey: string]: SimpleChange }) {
    let log: string[] = [];
    for (let propName in changes) {
      let changedProp = changes[propName];
      let to = JSON.stringify(changedProp.currentValue);
      if (changedProp.isFirstChange()) {
        log.push(`Initial value of ${propName} set to ${to}`);
      } else {
        let from = JSON.stringify(changedProp.previousValue);
        log.push(`${propName} changed from ${from} to ${to}`);
      }
    }
    this.onArticleChanged.emit(this.article);
  }

  uploaded(event) {
    console.log(JSON.parse(event.xhr.response)[0]);
    this.testimage = "assets/images/" + JSON.parse(event.xhr.response)[0];
  }

  uploadcouch(event) {
    console.log(event);
  }

  myUploader(event){
    console.log(event);
    this._db.Upload(event, this.article._id).then(
      data=>{console.log(data)},
      error=>{console.log(error)}
    );
  }

  onSubmit(f: NgForm) {
    console.log(f.value);  // { first: '', last: '' }
    console.log(f.valid);  // false
  }

}
