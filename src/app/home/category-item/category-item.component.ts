import { Component, OnInit } from '@angular/core';

const items = ['Login', 'Tables', 'Status', 'Summary', 'Accounts', 'Users'];

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
