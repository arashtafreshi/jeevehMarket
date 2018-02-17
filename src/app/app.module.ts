import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import {AppRoutingModule} from './routing/app-routing/app-routing.module';

import { AppComponent } from './app.component';
import { HomeMasterComponent } from './components/home-master/home-master.component';
import { CategoryItemComponent } from './components/category-item/category-item.component';
import { ArticleComponent } from './components/article/article.component';
import { AddNewArticleComponent } from './components/add-new-article/add-new-article.component';
import { ROUTES } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import {AuthGuardService} from './services/auth-guard.service';
import {AuthService} from './services/auth.service';

import {HomepageModule} from './routing/homepage-routing/homepage.module';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { OrderModule } from './components/order/order/order.module';
import { BooksModule } from './components/book/books.module';


@NgModule({
  declarations: [
    AppComponent,
    HomeMasterComponent,
    CategoryItemComponent,
    ArticleComponent,
    AddNewArticleComponent,
    LoginComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    HomepageModule,
    OrderModule,
    BooksModule,
    AppRoutingModule    
  ],
  providers: [AuthService,AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
