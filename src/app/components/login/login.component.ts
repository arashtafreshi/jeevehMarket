import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { Message } from 'primeng/api';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  message: string;
  //isLoggedIn = this.authService.isLoggedIn;//false;
  msgs: Message[] = [];
  doSpin: boolean = false;

  constructor(public authService: AuthService, public router: Router) {
    this.setMessage();
  }

  setMessage() {
    this.message = 'Logged ' + (this.authService.isLoggedIn ? 'in' : 'out');
  }

  login() {
    this.message = 'Trying to log in ...';
    this.doSpin = true;
    this.authService.login().subscribe(() => {
      this.setMessage();
      if (this.authService.isLoggedIn) {
        // Get the redirect URL from our auth service
        // If no redirect has been set, use the default
        let redirect = this.authService.redirectUrl ? this.authService.redirectUrl : '/home';
        this.doSpin = false;
        localStorage.setItem('isLoggedIn', "true");
        // Redirect the user
        this.router.navigate([redirect]);
      }
    });
  }

  logout() {
    this.authService.logout();
    localStorage.removeItem('isLoggedIn');
    this.setMessage();
    if (!this.authService.isLoggedIn) {
      // Get the redirect URL from our auth service
      // If no redirect has been set, use the default
      
      let redirect = this.authService.redirectUrl ? this.authService.redirectUrl : '/home';
      // Redirect the user
      this.router.navigate([redirect]);
    }
  }

  isLoggedIn(): boolean {
    this.authService.isLoggedIn = localStorage.getItem("isLoggedIn") === "true" ? true : false;
    console.log("isLoggedIn: ", this.authService.isLoggedIn);

    return this.authService.isLoggedIn;
  }

  ngOnInit() {
    this.msgs.push({ severity: 'error', summary: 'Username/Password', detail: 'The username/password is wrong. Please try again.' });
    //this.isLoggedIn = this.authService.isLoggedIn;
  }

}
