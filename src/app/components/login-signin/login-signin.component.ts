import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { Message } from 'primeng/api';
import { DbService } from '../../services/db.service';

@Component({
  selector: 'app-login-signin',
  templateUrl: './login-signin.component.html',
  styleUrls: ['./login-signin.component.css'],
  providers:[AuthService, DbService]
})
export class LoginSigninComponent implements OnInit {
  message: string;
  msgs:Message[] = [];
  doSpin:boolean=false;

  email:string="";
  password:string="";

  constructor(public authService: AuthService, public router: Router, private db:DbService) { 
    this.setMessage();
  }

  setMessage() {
    this.message = 'Logged ' + (this.authService.isLoggedIn ? 'in' : 'out');
  }

  ngOnInit() {
    this.msgs.push({severity:'error', summary:'Username/Password', detail:'The username/password is wrong. Please try again.'});
  }

  login() {
    this.message = 'Trying to log in ...';
    this.doSpin= true;
    this.authService.login().subscribe(() => {
      this.setMessage();
      if (this.authService.isLoggedIn) {
        // Get the redirect URL from our auth service
        // If no redirect has been set, use the default
        let redirect = this.authService.redirectUrl ? this.authService.redirectUrl : '/admin';
        this.doSpin=false;
        // Redirect the user
        this.router.navigate([redirect]);
      }
    });
  }

  onSubmit(){
    this.db.login(this.email, this.password).then(
      data=>{console.log(data)},
      err=>{console.log(err)}
    );
  }

}
