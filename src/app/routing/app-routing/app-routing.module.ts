import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { CategoryItemComponent } from '../../components/category-item/category-item.component';
import { HomeMasterComponent } from '../../components/home-master/home-master.component';
import { AuthGuardService } from '../../services/auth-guard.service';
import { LoginComponent } from '../../components/login/login.component';
import { AuthService } from '../../services/auth.service';
import { PageNotFoundComponent } from '../../components/page-not-found/page-not-found.component';

// HomePage
import { HomepageComponent } from '../../components/homepage/homepage.component';
import { Link1Component } from '../../components/link1/link1.component';
import { Link2Component } from '../../components/link2/link2.component';
import { Link3Component } from '../../components/link3/link3.component';

import { UploadFileComponent } from '../../components/upload-file/upload-file.component';

// Admin
import { AdminMainComponent } from '../../components/admin-main/admin-main.component';
import { AdminArticlesComponent } from '../../components/admin-articles/admin-articles.component';
import { AdminUsersComponent } from '../../components/admin-users/admin-users.component';
import { AdminSettingsComponent } from '../../components/admin-settings/admin-settings.component';

const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: 'homepage',
    component: HomeMasterComponent,
    //canActivateChild: [AuthGuardService],
    children: [
      {
        path: '',
        canActivateChild: [AuthGuardService],
        children: [
          { path: 'link1', component: Link1Component },
          { path: 'link2', component: Link2Component },
          { path: 'link3', component: Link3Component }
        ]
      }
    ]
  },
  {
    path: 'admin',
    component: AdminMainComponent,
    children: [
      {
        path: '',
        canActivateChild: [AuthGuardService],
        children: [
          {
            path: 'Articles',
            component: AdminArticlesComponent
          },
          {
            path: 'Users',
            component: AdminUsersComponent
          },
          {
            path: 'Settings',
            component: AdminSettingsComponent
          }
        ]
      }
    ]
  },
  {
    path: 'UploadFileComponent',
    component: UploadFileComponent
  },
  {
    path: '',
    component: HomeMasterComponent,
    //canActivate: [AuthGuardService],
    children: [
      {
        path: 'home',
        component: CategoryItemComponent
      }
    ]
  },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
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
