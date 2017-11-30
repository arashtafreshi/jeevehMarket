import { Component, OnInit, Input } from '@angular/core';
import { ArticleModel } from './article-model';
import {ArticleServiceService} from '../edit/article/article-service.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css'],
  providers:[ArticleServiceService]
})
export class ArticleComponent implements OnInit {
  @Input() article:ArticleModel;

  constructor(private articleService:ArticleServiceService) { }

  ngOnInit() {
    //this.articles = this.articleService.getArticles();
  }

}
