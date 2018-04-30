import { Component, OnInit, EventEmitter, Output, SimpleChange } from '@angular/core';
import { DbService } from '../../services/db.service';
import { dbArticle } from '../../models/dbArticle';

import {TreeNode} from 'primeng/api';

@Component({
  selector: 'app-admin-article-overview',
  templateUrl: './admin-article-overview.component.html',
  styleUrls: ['./admin-article-overview.component.css'],
  providers:[DbService]
})
export class AdminArticleOverviewComponent implements OnInit {
  allArticles:dbArticle[];
  @Output() onArticleEdit: EventEmitter<dbArticle> = new EventEmitter<dbArticle>();
  articleTree:TreeNode[];

  constructor(private _db:DbService) { }

  ngOnInit() {
    this._db.GetAllArticles().subscribe((data)=>{
      this.allArticles=data.rows;
    });
    this.onArticleEdit.emit(new dbArticle);
  }

  deleteArticle(id:string){
    this._db.Delete(id);
  }

  editArticle(article:dbArticle){
    console.log(article);
    this.onArticleEdit.emit(article);
  }


  


}
