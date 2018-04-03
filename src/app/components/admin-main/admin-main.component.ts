import { Component, OnInit, Input } from '@angular/core';
import { ArticleComponent } from '../article/article.component';
import { FormsModule } from '@angular/forms';

import { User } from '../../models/User';
import {DbService} from '../../services/db.service';

import { ArticleModel } from '../article/article-model';

@Component({
  selector: 'app-admin-main',
  templateUrl: './admin-main.component.html',
  styleUrls: ['./admin-main.component.css'],
  providers:[DbService]
})
export class AdminMainComponent implements OnInit {
  @Input() article: ArticleModel;
  user:User;
  allUsers:User[];



  constructor(private _db:DbService) {}

  ngOnInit() {
    this.article = new ArticleModel();
    this.user = new User();
    this.getAllUsers();
  }

  onArticleChanged(inputArticle: ArticleModel) {
    this.article = inputArticle;
  }

  addUser() {
    console.log(this.user);
    this._db.Save(this.user).then(
      data => {
        console.log('success', data);
        this.getAllUsers();
      },
      error => console.log('oops', error)
    );
  }

  getAllUsers(){
    this._db.GetAllUsers().subscribe((resp:User[])=>this.allUsers = resp);
  }

  deleteUser(usr:User){
    console.log("delete: "+usr);
    this._db.Delete(usr._id).then(
      data => {
        console.log('success', data);
        this.getAllUsers();
      },
      error => console.log('oops', error)
    );
    
  }

}
