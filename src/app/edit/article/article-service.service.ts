import { Injectable } from '@angular/core';
import {ArticleModel} from '../../article/article-model';

const articles:ArticleModel[] = [];

@Injectable()
export class ArticleServiceService {

  addArticle(article:ArticleModel){
    let art:ArticleModel=new ArticleModel();
    art = article;
    articles.push(art);
  }

  getArticles():ArticleModel[]{
    return articles;
  }

  constructor() { }

}
