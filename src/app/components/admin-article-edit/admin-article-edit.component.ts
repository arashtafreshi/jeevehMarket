import { Component, OnInit, Input } from '@angular/core';
import { dbArticle } from '../../models/dbArticle';
import { DbService } from '../../services/db.service';

@Component({
  selector: 'app-admin-article-edit',
  templateUrl: './admin-article-edit.component.html',
  styleUrls: ['./admin-article-edit.component.css'],
  providers:[DbService]
})
export class AdminArticleEditComponent implements OnInit {
  @Input() article:dbArticle;
  isUpdating:boolean = false;
  constructor(private db:DbService) { }

  ngOnInit() {
    //this.article = new dbArticle();
  }

  updateArticle(){
    this.isUpdating = true;
    this.db.Update(this.article._id, this.article).then(
      data=>{ 
        console.log("Document updated.");
        this.isUpdating = false;
      },
      err=> {
        console.log("error updating document.");
        this.isUpdating = false;
      }
    )
  }

}
