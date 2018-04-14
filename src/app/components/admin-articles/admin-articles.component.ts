import { Component, OnInit, Input } from '@angular/core';
import { ArticleComponent } from '../article/article.component';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-admin-articles',
  templateUrl: './admin-articles.component.html',
  styleUrls: ['./admin-articles.component.css'],
  providers:[]
})
export class AdminArticlesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }


}
