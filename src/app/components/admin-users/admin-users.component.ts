import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { User } from '../../models/User';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-admin-users',
  templateUrl: './admin-users.component.html',
  styleUrls: ['./admin-users.component.css'],
  providers:[UserService]
})
export class AdminUsersComponent implements OnInit {

  user:User;
  allUsers:User[];

  constructor(private userService:UserService) { }

  ngOnInit() {
    this.user = new User();
    this.getAllUsers();
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
