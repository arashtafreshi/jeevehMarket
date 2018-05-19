import { Component, OnInit } from '@angular/core';
import { DbService } from '../../services/db.service';

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


  constructor(private db: DbService) { }

  ngOnInit() {
  }

  onSubmit() {
    this.submitted = true;
    console.log("submitted!");
    this.db.createNewUser(this.email, this.password).then(
      data=>{console.log(data)},
      err=>{console.log(err)}
    );
  }

}
