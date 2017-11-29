import { Component, OnInit } from '@angular/core';
import { ArticleModel } from './article-model';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  articles: ArticleModel[] = [];
  article: ArticleModel = {
    author: 'Arash',
    body: 'This is the body. Body is long.',
    date: new Date().toLocaleDateString(),
    header: 'New Article',
    image: 'https://ecocolorstours-hz5sku48qafi72x5.netdna-ssl.com/wp-content/uploads/2015/09/jaguar2.jpg'
  };

  constructor() { }

  ngOnInit() {
    this.articles.push(this.article);
  }

}
