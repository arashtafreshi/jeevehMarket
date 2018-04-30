import { Component, OnInit, Input } from '@angular/core';
import { ArticleComponent } from '../article/article.component';
import { FormsModule } from '@angular/forms';
import { dbArticle } from '../../models/dbArticle';


@Component({
  selector: 'app-admin-articles',
  templateUrl: './admin-articles.component.html',
  styleUrls: ['./admin-articles.component.css'],
  providers:[]
})
export class AdminArticlesComponent implements OnInit {
  @Input() article: dbArticle;
  constructor() { }

  ngOnInit() {
    this.article = new dbArticle();
  }

  onArticleEdit(inputArticle: dbArticle) {
    this.article = inputArticle;
    console.log(this.article);
  }

}
