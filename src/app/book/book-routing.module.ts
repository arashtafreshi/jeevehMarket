import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';


import { BookComponent } from './book.component';


const routingApp: Routes = [
  {
    path: 'books',
    component: BookComponent,
    children: [
      {
        path: '',
        canActivateChild: [],
        children: []
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
export class BookRoutingModule { }
