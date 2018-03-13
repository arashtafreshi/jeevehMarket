import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { catchError, map, tap } from 'rxjs/operators';

const items = ['Tables', 'Status', 'Summary', 'Accounts', 'Users'];

@Component({
  selector: 'app-category-item',
  templateUrl: './category-item.component.html',
  styleUrls: ['./category-item.component.css']
})
export class CategoryItemComponent implements OnInit {

  items:string[] = items;
  constructor() { }

  ngOnInit() {
  }

}
