import { Component, OnInit, Input } from '@angular/core';
import { ArticleComponent } from '../article/article.component';
import { FormsModule } from '@angular/forms';
import { dbArticle } from '../../models/dbArticle';

import { ArticleModel } from '../article/article-model';

@Component({
  selector: 'app-admin-articles',
  templateUrl: './admin-articles.component.html',
  styleUrls: ['./admin-articles.component.css']
})
export class AdminArticlesComponent implements OnInit {
  @Input() article: dbArticle;

  constructor() { }

  ngOnInit() {
    this.article = new dbArticle();
  }

  onArticleChanged(inputArticle: dbArticle) {
    this.article = inputArticle;
  }

}
