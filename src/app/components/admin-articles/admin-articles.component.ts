import { Component, OnInit, Input } from '@angular/core';
import { ArticleComponent } from '../article/article.component';
import { FormsModule } from '@angular/forms';


// model
import { dbArticle } from '../../models/dbArticle';
// db
import { DbService } from '../../services/db.service';

@Component({
  selector: 'app-admin-articles',
  templateUrl: './admin-articles.component.html',
  styleUrls: ['./admin-articles.component.css'],
  providers:[DbService]
})
export class AdminArticlesComponent implements OnInit {
  @Input() article: dbArticle;
  allArticles:dbArticle[];

  constructor(private _db:DbService) { }

  ngOnInit() {
    this.article = new dbArticle();
    this._db.GetAllArticles().subscribe((data)=>this.allArticles=data.rows);
  }

  onArticleChanged(inputArticle: dbArticle) {
    this.article = inputArticle;
  }

  newArticle(){
    alert("Add new Article!");
  }

  deleteArticle(id:string){
    this._db.Delete(id);
  }

  editArticle(id:string){
    alert("Editing article "+id);
  }

}
