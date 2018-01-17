import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import {AppRoutingModule} from './app-routing/app-routing.module';

import { AppComponent } from './app.component';
import { HomeMasterComponent } from './home/home-master/home-master.component';
import { CategoryItemComponent } from './home/category-item/category-item.component';
import { ArticleComponent } from './article/article.component';
import { AddNewArticleComponent } from './edit/article/add-new-article/add-new-article.component';
import { ROUTES } from '@angular/router/src/router_config_loader';




@NgModule({
  declarations: [
    AppComponent,
    HomeMasterComponent,
    CategoryItemComponent,
    ArticleComponent,
    AddNewArticleComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
