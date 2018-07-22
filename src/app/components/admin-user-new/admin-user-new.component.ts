import { Component, OnInit, Input } from '@angular/core';
import { User } from '../../models/User';
import { DbService } from '../../services/db.service';

@Component({
  selector: 'app-admin-user-new',
  templateUrl: './admin-user-new.component.html',
  styleUrls: ['./admin-user-new.component.css'],
  providers: [DbService]
})
export class AdminUserNewComponent implements OnInit {
  @Input() user: User;

  constructor(private db: DbService) { }

  ngOnInit() {
    this.user = new User();
  }

  onUserChanged(inputUser: User) {
    this.user = inputUser;

  }

  addUser(user: User) {
    let that = this;
    this.db.createNewUser(user.email, user.password).then(function (data) {
      data => {
        console.log("New user created on _user table", data);
        that.db.Save(User).then(function (res) {
          res => {
            console.log("User added to DB", res);
          }
          error => {
            console.error("user failed to add to DB.", error)
          }

        })
      }
      error => {
        console.error("New user not created on _user table");
      };

    })
  }
}
