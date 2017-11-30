import { Component, OnInit } from '@angular/core';
import {ArticleServiceService} from '../../edit/article/article-service.service';
import { ArticleModel } from '../../article/article-model';

@Component({
  selector: 'app-home-master',
  templateUrl: './home-master.component.html',
  styleUrls: ['./home-master.component.css'],
  providers:[ArticleServiceService]
})
export class HomeMasterComponent implements OnInit {
  articles:ArticleModel[];
  constructor(private articleService:ArticleServiceService) { }

  ngOnInit() {
    this .articles = this.articleService.getArticles();
  }

}
