import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-signout',
  templateUrl: './login-signout.component.html',
  styleUrls: ['./login-signout.component.css']
})
export class LoginSignoutComponent implements OnInit {
  message: string;
  doSpin:boolean=false;

  constructor(public authService: AuthService, public router: Router) { }

  ngOnInit() {
  }

  logout() {
    this.authService.logout();
    this.setMessage();
  }

  setMessage() {
    this.message = 'Logged ' + (this.authService.isLoggedIn ? 'in' : 'out');
  }

}
