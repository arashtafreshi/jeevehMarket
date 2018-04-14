import { Component, OnInit } from '@angular/core';
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

  articleTree:TreeNode[];

  constructor(private _db:DbService) { }

  ngOnInit() {
    this._db.GetAllArticles().subscribe((data)=>{
      this.allArticles=data.rows;
    });
    
  }

  deleteArticle(id:string){
    this._db.Delete(id);
  }

  editArticle(id:string){
    alert("Editing article "+id);
  }


}
