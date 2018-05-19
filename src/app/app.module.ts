import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { } from '@angular/cdk';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './routing/app-routing/app-routing.module';

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
import { AuthGuardService } from './services/auth-guard.service';
import { AuthService } from './services/auth.service';

import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { OrderModule } from './components/order/order/order.module';
import { BooksModule } from './components/book/books.module';
import { StripeComponent } from './components/stripe/stripe.component';
import { StripeDirective } from './directives/stripe.directive';
import { AdminMainComponent } from './components/admin-main/admin-main.component';

// Prime NG
import { ContextMenuModule } from 'primeng/contextmenu';
import { InputTextModule } from 'primeng/inputtext';
import { DataViewModule } from 'primeng/dataview';
import { TableModule } from 'primeng/table';
import { CalendarModule } from 'primeng/calendar';
import { ButtonModule } from 'primeng/button';
import { FileUploadModule } from 'primeng/fileupload';
import { EditorModule } from 'primeng/editor';
import { PanelModule } from 'primeng/panel';
import { TabViewModule } from 'primeng/tabview';
import { TreeModule } from 'primeng/tree';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';
import { CaptchaModule } from 'primeng/captcha';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { SidebarModule } from 'primeng/sidebar';
import { MenubarModule } from 'primeng/menubar';
import { StepsModule } from 'primeng/steps';
import { PanelMenuModule } from 'primeng/panelmenu';
import { MenuModule } from 'primeng/menu';
import { InputSwitchModule } from 'primeng/inputswitch';



import { AdminArticlesComponent } from './components/admin-articles/admin-articles.component';
import { AdminUsersComponent } from './components/admin-users/admin-users.component';
import { AdminSettingsComponent } from './components/admin-settings/admin-settings.component';
import { UploadFileComponent } from './components/upload-file/upload-file.component';
import { CouchdbComponent } from './components/couchdb/couchdb.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { AdminArticleOverviewComponent } from './components/admin-article-overview/admin-article-overview.component';
import { AdminArticleNewComponent } from './components/admin-article-new/admin-article-new.component';
import { AdminArticleEditComponent } from './components/admin-article-edit/admin-article-edit.component';
import { LoginSigninComponent } from './components/login-signin/login-signin.component';
import { LoginSignoutComponent } from './components/login-signout/login-signout.component';
import { MenuTopnavComponent } from './components/menu-topnav/menu-topnav.component';
import { LoginSignupComponent } from './components/login-signup/login-signup.component';
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
    AdminMainComponent,
    AdminArticlesComponent,
    AdminUsersComponent,
    AdminSettingsComponent,
    UploadFileComponent,
    CouchdbComponent,
    HomepageComponent,
    AdminArticleOverviewComponent,
    AdminArticleNewComponent,
    AdminArticleEditComponent,
    LoginSigninComponent,
    LoginSignoutComponent,
    MenuTopnavComponent,
    LoginSignupComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    OrderModule,
    BooksModule,
    //ContextMenuModule,
    DataViewModule,
    TableModule,
    CalendarModule,
    ButtonModule,
    FileUploadModule,
    InputTextModule,
    EditorModule,
    BrowserAnimationsModule,
    PanelModule,
    TabViewModule,
    TreeModule,
    MessagesModule,
    MessageModule,
    CaptchaModule,
    ProgressSpinnerModule,
    SidebarModule,
    MenubarModule,
    StepsModule,
    PanelMenuModule,
    MenuModule,
    InputSwitchModule,
    AppRoutingModule
  ],
  providers: [AuthService, AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
