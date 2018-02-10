import { Component, OnInit } from '@angular/core';
import {ArticleModel} from '../../../article/article-model';
import {ArticleServiceService} from '../article-service.service';

@Component({
  selector: 'app-add-new-article',
  templateUrl: './add-new-article.component.html',
  styleUrls: ['./add-new-article.component.css'],
  providers:[ArticleServiceService]
})
export class AddNewArticleComponent implements OnInit {

  article:ArticleModel = new ArticleModel();
  
  addArticle():void{
    console.log(this.article.toString());
    this.articleService.addArticle(this.article);
    this.article = new ArticleModel();
    this.article.image = "https://picsum.photos/300/300";
  }

  constructor(private articleService:ArticleServiceService) { }

  ngOnInit() {
    
  }

}
