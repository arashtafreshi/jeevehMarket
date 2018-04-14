import { Component, OnInit, Input } from '@angular/core';
import { dbArticle } from '../../models/dbArticle';
import { DbService } from '../../services/db.service';

@Component({
  selector: 'app-admin-article-new',
  templateUrl: './admin-article-new.component.html',
  styleUrls: ['./admin-article-new.component.css'],
  providers:[DbService]
})
export class AdminArticleNewComponent implements OnInit {
  @Input() article: dbArticle;
  constructor(private _db:DbService) { }

  ngOnInit() {
    this.article = new dbArticle();
  }

  onArticleChanged(inputArticle: dbArticle) {
    this.article = inputArticle;
  }

}
