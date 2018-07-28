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
  allArticles:dbArticle[] = [];
  @Output() onArticleEdit: EventEmitter<dbArticle> = new EventEmitter<dbArticle>();
  articleTree:TreeNode[];
  orderBy:string = "dateCreated";
  asc:string = 'true';

  constructor(private _db:DbService) { }

  ngOnInit() {
    this._db.GetAllArticles().subscribe((data)=>{
      data.rows.forEach(element => {
        this.allArticles.push(element.value)
      });
      //this.sort(this.allArticles, "dateCreated", false);
      this.onArticleEdit.emit(new dbArticle);
    });
    
  }

  deleteArticle(id:string){
    this._db.Delete(id);
  }

  editArticle(article:dbArticle){
    console.log(article);
    this.onArticleEdit.emit(article);
  }

  sort(elements:any, by:string, asc:string){
    console.log(asc+":"+by);
    try{
      this.allArticles.sort((a,b)=>{
        if(a[by] > b[by]){
          return 1*(asc==='true'?1:-1);
        }else if(a[by] < b[by]){
          return -1*(asc==='false'?1:-1);
        }else{
          return 0;
        }
      });
    }catch(err){
      console.log(err);
    }
    
  }
  


}
