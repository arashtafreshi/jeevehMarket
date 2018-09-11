import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { User } from '../../models/User';
import { DbService } from '../../services/db.service';
import { dbArticle } from '../../models/dbArticle';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-admin-user-overview',
  templateUrl: './admin-user-overview.component.html',
  styleUrls: ['./admin-user-overview.component.css'],
  providers: [dbArticle, UserService]
})
export class AdminUserOverviewComponent implements OnInit {

  allUsers: User[];
  @Output() onUserEdit: EventEmitter<User> = new EventEmitter<User>();

  constructor(private _db: DbService, private _userService: UserService) { }

  ngOnInit() {
    //this.user = new User();
    this._userService.GetAllUsers().subscribe((data) => this.allUsers = data.rows);
    this.onUserEdit.emit(new User);
  }

  getAllUsers() {
    this._userService.GetAllUsers().subscribe(resp => {
      this.allUsers = resp.rows;
    });
  }

  deleteUser(id: string) {
    this._db.Delete(id).then(
      data => {
        this.getAllUsers();
      },
      error => console.error('deleteUser', error)
    );
  }

  editUser(user: User) {
    console.log(user);
    this.onUserEdit.emit(user);
  }

}
