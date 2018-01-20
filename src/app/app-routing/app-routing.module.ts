import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { CategoryItemComponent } from '../home/category-item/category-item.component';
import { HomeMasterComponent } from '../home/home-master/home-master.component';
import { AuthGuardService } from '../login/auth-guard.service';
import { LoginComponent } from '../login/login.component';
import { AuthService } from '../login/auth.service';

import {HomepageRoutingModule} from '../pages/homepage-routing/homepage-routing.module'
import { HomepageComponent } from '../pages/homepage/homepage.component';

const appRoutes: Routes = [
  { path: 'admin', component: LoginComponent },
  { path: 'homepage', component: HomepageComponent },
  {
    path: '',
    component: HomeMasterComponent,
    //canActivate: [AuthGuardService],
    children: [
      { path: 'home', component: CategoryItemComponent }
    ]
  }  
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    HomepageRoutingModule
  ],
  exports: [    
    RouterModule
  ],
  providers: [
    AuthService,
    AuthGuardService
  ]
})
export class AppRoutingModule { }
