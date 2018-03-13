import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
const uuidv1 = require('uuid/v1');

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { User } from '../models/User';

const users: User[] = [];

@Injectable()
export class UserService {

  constructor(private http: HttpClient) { }

  addUser(newUser: User) {
    users.push(newUser);
    console.log(newUser);

    //var re = /-/gi; 
    newUser.externalId = uuidv1();//.replace(re,'_');
    return this.http.post('/user', newUser);
  }

  getUsers() {
    let users: User[];
    return this.http.get<User[]>('/user');
  }

  getUser(externalId:string): Observable<User> {
    return this.http.get<User>('/users/'+externalId, { responseType: 'json', observe: 'body' });
  }

  deleteUser(externalId:String) {
    console.log(externalId);
    return this.http.delete('/user/'+externalId);
  }

  updateUser(user:User): Observable<User> {
    return this.http.put<User>('/users/'+user.externalId, { responseType: 'json', observe: 'body' });
  }

}
