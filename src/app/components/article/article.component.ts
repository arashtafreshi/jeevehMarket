import { Component, OnInit, Input } from '@angular/core';
import { ArticleModel } from './article-model';
import {ArticleServiceService} from '../../services/article-service.service';

import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css'],
  providers:[ArticleServiceService]
})
export class ArticleComponent implements OnInit {
  @Input() article:ArticleModel;

  private items: MenuItem[];

  constructor(private articleService:ArticleServiceService) { }

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
