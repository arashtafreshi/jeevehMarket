import { Component, OnInit } from '@angular/core';
import {ArticleServiceService} from '../../services/article-service.service';
import { ArticleModel } from '../article/article-model';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { catchError, map, tap } from 'rxjs/operators';

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
    this.articleService.getArticles().subscribe((data:ArticleModel[])=>this.articles=data);
  }

}
