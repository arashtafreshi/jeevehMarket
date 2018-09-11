import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { User } from '../../models/User';
import { DbService } from '../../services/db.service';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-admin-users',
  templateUrl: './admin-users.component.html',
  styleUrls: ['./admin-users.component.css'],
  providers: [DbService, UserService]
})
export class AdminUsersComponent implements OnInit {

  user: User;
  allUsers: User[];

  constructor(private _db: DbService, private _userService:UserService) { }

  ngOnInit() {
    this.user = new User();
    this._userService.GetAllUsers().subscribe((data)=>this.allUsers=data.rows);
  }

  addUser() {
    console.log("User to add: ", this.user);
    this._db.Save(this.user).then(
      data => {
        console.log('success', data);
        this.getAllUsers();
      },
      error => console.log('oops', error)
    );
  }

  getAllUsers() {
    this._userService.GetAllUsers().subscribe(resp =>{
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

  onUserEdit(inputUser: User) {
    this.user = inputUser;
    console.log(this.user);
  }


}
