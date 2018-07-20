import { Component, OnInit, Input } from '@angular/core';
import { User } from '../../models/User';

@Component({
  selector: 'app-admin-user-new',
  templateUrl: './admin-user-new.component.html',
  styleUrls: ['./admin-user-new.component.css']
})
export class AdminUserNewComponent implements OnInit {
  @Input() user: User;

  constructor() { }

  ngOnInit() {
    this.user = new User();
  }

  onUserChanged(inputUser: User) {
    this.user = inputUser;
  }
}
