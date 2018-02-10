import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';


import { BookComponent } from './book.component';
import {BookRoutingModule} from './book-routing.module';


@NgModule({
    imports: [
      CommonModule,
      FormsModule,
      BookRoutingModule
    ],
    declarations: [
      BookComponent
    ],
    providers: []
  })
  export class BooksModule {}