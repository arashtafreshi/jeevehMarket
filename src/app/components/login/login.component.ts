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
    
  }


  isLoggedIn(): boolean {
    this.authService.isLoggedIn = localStorage.getItem("isLoggedIn") === "true" ? true : false;
    console.log("isLoggedIn: ", this.authService.isLoggedIn);

    return this.authService.isLoggedIn;
  }

  ngOnInit() {
    
  }

}
