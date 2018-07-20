import { Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


import { Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';


import { User } from './user';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class UserService {

  api_url = 'http://localhost:3000';
  usersUrl = `${this.api_url}/users`;

  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.usersUrl)
    .pipe(map(data => data));
  }

  createUser(user: User): Observable<any> {
    return this.http.post<User>(this.usersUrl, user, httpOptions);
  }

}
