import { Component, OnInit, Output, EventEmitter, OnChanges, SimpleChange } from '@angular/core';
import { ArticleModel } from '../article/article-model';
import { ArticleServiceService } from '../../services/article-service.service';

@Component({
  selector: 'app-add-new-article',
  templateUrl: './add-new-article.component.html',
  styleUrls: ['./add-new-article.component.css'],
  providers: [ArticleServiceService]
})
export class AddNewArticleComponent implements OnInit, OnChanges {
  testimage = "";
  fileToUpload: File = null;
  article: ArticleModel = new ArticleModel();
  @Output() onArticleChanged: EventEmitter<ArticleModel> = new EventEmitter<ArticleModel>();

  addArticle(): void {
    console.log(this.article.toString());
    this.articleService.addArticle(this.article);
    this.article = new ArticleModel();
    this.article.image = "https://picsum.photos/300/300";
  }

  constructor(private articleService: ArticleServiceService) { }

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

  uploaded(event){
    console.log(JSON.parse(event.xhr.response)[0]);
    this.testimage = "assets/images/" + JSON.parse(event.xhr.response)[0];
  }

}
