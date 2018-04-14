import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { Message } from 'primeng/api';

@Component({
  selector: 'app-login-signin',
  templateUrl: './login-signin.component.html',
  styleUrls: ['./login-signin.component.css'],
  providers:[AuthService]
})
export class LoginSigninComponent implements OnInit {
  message: string;
  msgs:Message[] = [];
  doSpin:boolean=false;

  constructor(public authService: AuthService, public router: Router) { 
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

}
