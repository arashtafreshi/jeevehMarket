import { Component, OnInit } from '@angular/core';
import { DbService } from '../../services/db.service';
import { User } from '../../models/User';

const role: string = "jeevehmarketuser";

@Component({
  selector: 'app-login-signup',
  templateUrl: './login-signup.component.html',
  styleUrls: ['./login-signup.component.css'],
  providers: [DbService]
})
export class LoginSignupComponent implements OnInit {
  email: string = "";
  password: string = "";
  repassword: string = "";
  submitted = false;
  newUser: User;


  constructor(private db: DbService) {
    this.newUser = new User();
  }

  ngOnInit() {
  }

  onSubmit() {
    this.submitted = true;
    console.log("submitted!");
    let that = this;
    this.db.createNewUser(this.newUser.email, this.newUser.password).then(
      data => {
        console.log("New user created on _user table", data);
        that.db.login(that.newUser.email, that.newUser.password).then(
          () => {
            this.newUser.role = "jeevehmarket_user";
            that.db.Save(this.newUser).then(
              res => {
                console.log("User added to DB", res);
              },
              error => {
                console.error("user failed to add to DB.", error)
              }

            );
          },
          () => { }
        );
      },
      error => {
        console.error("New user not created on _user table");
      });
  }

}
