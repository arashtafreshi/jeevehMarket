import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { CategoryItemComponent } from '../../components/category-item/category-item.component';
import { HomeMasterComponent } from '../../components/home-master/home-master.component';
import { AuthGuardService } from '../../services/auth-guard.service';
import { LoginComponent } from '../../components/login/login.component';
import { AuthService } from '../../services/auth.service';
import {PageNotFoundComponent} from '../../components/page-not-found/page-not-found.component';

import {HomepageRoutingModule} from '../homepage-routing/homepage-routing.module'
import { HomepageComponent } from '../../components/homepage/homepage.component';

const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'homepage', component: HomepageComponent },
  {
    path: '',
    component: HomeMasterComponent,
    //canActivate: [AuthGuardService],
    children: [
      { path: 'home', component: CategoryItemComponent }
    ]
  },
  { path: '**', component: PageNotFoundComponent },
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
