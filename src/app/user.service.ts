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

  createUser(user: User): Observable<User> {
    return this.http.post<User>(this.usersUrl, user, httpOptions);
  }

  getUser(id: String): Observable<User> {
    const url = `${this.usersUrl}/${id}`;
    return this.http.get<User>(url);
}

  updateUser(id: String, user: User): Observable<any> {
    const url = `${this.usersUrl}/${id}`;
    return this.http.put(url, user, httpOptions);
}

  deleteUser (id: String): Observable<User> {
    const url = `${this.usersUrl}/${id}`;
    return this.http.delete<User>(url, httpOptions);
  }

}
