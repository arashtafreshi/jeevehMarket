import { Component, OnInit, Input } from '@angular/core';
import { ArticleComponent } from '../article/article.component';
import { FormsModule } from '@angular/forms';

import { User } from '../../models/User';
import {UserService} from '../../services/user.service';

import { ArticleModel } from '../article/article-model';

@Component({
  selector: 'app-admin-main',
  templateUrl: './admin-main.component.html',
  styleUrls: ['./admin-main.component.css'],
  providers:[UserService]
})
export class AdminMainComponent implements OnInit {
  @Input() article: ArticleModel;
  user:User;
  allUsers:User[];



  constructor(private userService:UserService) {}

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
    this.userService.addUser(this.user).subscribe(
      data => {
        console.log('success', data);
        this.getAllUsers();
      },
      error => console.log('oops', error)
    );
  }

  getAllUsers(){
    this.userService.getUsers().subscribe((resp:User[])=>this.allUsers = resp);
  }

  deleteUser(usr:User){
    console.log("delete: "+usr);
    this.userService.deleteUser(usr.externalId).subscribe(
      data => {
        console.log('success', data);
        this.getAllUsers();
      },
      error => console.log('oops', error)
    );
    
  }

}
