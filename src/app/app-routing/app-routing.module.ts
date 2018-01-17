import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes }  from '@angular/router';

import {CategoryItemComponent} from '../home/category-item/category-item.component';
import {HomeMasterComponent} from '../home/home-master/home-master.component';

const appRoutes: Routes = [
  { path: 'home', component: CategoryItemComponent },
  { path: '', component: HomeMasterComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
    {enableTracing:true})
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule { }
