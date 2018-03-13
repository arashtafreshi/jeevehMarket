import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import {AppRoutingModule} from './routing/app-routing/app-routing.module';

import { AppComponent } from './app.component';
import { HomeMasterComponent } from './components/home-master/home-master.component';
import { Link1Component } from './components/link1/link1.component';
import { Link2Component } from './components/link2/link2.component';
import { Link3Component } from './components/link3/link3.component';

import { CategoryItemComponent } from './components/category-item/category-item.component';
import { ArticleComponent } from './components/article/article.component';
import { AddNewArticleComponent } from './components/add-new-article/add-new-article.component';
import { ROUTES } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import {AuthGuardService} from './services/auth-guard.service';
import {AuthService} from './services/auth.service';

import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { OrderModule } from './components/order/order/order.module';
import { BooksModule } from './components/book/books.module';
import { StripeComponent } from './components/stripe/stripe.component';
import { StripeDirective } from './directives/stripe.directive';
import { AdminMainComponent } from './components/admin-main/admin-main.component';

import {ContextMenuModule} from 'primeng/contextmenu';
import {DataViewModule} from 'primeng/dataview';
import {TableModule} from 'primeng/table';
//import {MenuItem} from 'primeng/api';


@NgModule({
  declarations: [
    AppComponent,
    HomeMasterComponent,
    CategoryItemComponent,
    ArticleComponent,
    AddNewArticleComponent,
    LoginComponent,
    PageNotFoundComponent,
    StripeComponent,
    StripeDirective,
    Link1Component,
    Link2Component,
    Link3Component,
    AdminMainComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    OrderModule,
    BooksModule,
    ContextMenuModule,
    DataViewModule,
    TableModule,
    AppRoutingModule
  ],
  providers: [AuthService,AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
