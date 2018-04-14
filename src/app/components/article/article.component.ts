import { Component, OnInit, Input } from '@angular/core';


import {MenuItem} from 'primeng/api';
import { dbArticle } from '../../models/dbArticle';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css'],
  providers:[]
})
export class ArticleComponent implements OnInit {
  @Input() article:dbArticle;

  private items: MenuItem[];

  constructor() { }

  ngOnInit() {
    //this.articles = this.articleService.getArticles();
    this.items = [
      {
          label: 'File',
          items: [{
                  label: 'New', 
                  icon: 'fa-plus',
                  items: [
                      {label: 'Project'},
                      {label: 'Other'},
                  ]
              },
              {label: 'Open'},
              {label: 'Quit'}
          ]
      },
      {
          label: 'Edit',
          icon: 'fa-edit',
          items: [
              {label: 'Undo', icon: 'fa-mail-forward'},
              {label: 'Redo', icon: 'fa-mail-reply'}
          ]
      }
  ];
  }

}
