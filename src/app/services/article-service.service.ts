import { Injectable } from '@angular/core';
import {ArticleModel} from '../components/article/article-model';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { catchError, map, tap } from 'rxjs/operators';

const articles:ArticleModel[] = [];

@Injectable()
export class ArticleServiceService {

  addArticle(article:ArticleModel){
    let art:ArticleModel=new ArticleModel();
    art = article;
    articles.push(art);

    this.http.post('/article',art).subscribe(
        data => console.log('success', data),
        error => console.log('oops', error)
      );
    //this.articles = data;
  }

  getArticles(): Observable<ArticleModel[]>{
    let articles:ArticleModel[];
    return this.http.get<ArticleModel[]>('/article', {responseType: 'json', observe:'body'});
    // this.http.get('/article').subscribe(data => {
    //   articles = JSON.parse<ArticleModel[]>(data);
    // });
    //return articles;
  }

  uploadFile(files : any): Observable<string>{
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'multipart/form-data',
      })
    };
    return this.http.post<any>('/upload',files, httpOptions);
  }


  constructor(private http:HttpClient) { }

}
