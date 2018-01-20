import { Component } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { AuthService } from './login/auth.service';
import { AuthGuardService } from './login/auth-guard.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
}
