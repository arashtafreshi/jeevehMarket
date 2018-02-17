import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuardService } from '../../services/auth-guard.service';
import { AuthService } from '../../services/auth.service';

import { HomepageComponent } from '../../components/homepage/homepage.component';
import { Link1Component } from '../../components/link1/link1.component';
import { Link2Component } from '../../components/link2/link2.component';
import { Link3Component } from '../../components/link3/link3.component';


const routingApp: Routes = [
  {
    path: 'homepage',
    component: HomepageComponent,
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
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routingApp)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class HomepageRoutingModule { }
