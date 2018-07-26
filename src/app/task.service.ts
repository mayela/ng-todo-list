import { Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


import { Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';


import { Task } from './task';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class TaskService {

  api_url = 'http://localhost:3000';
  tasksUrl = `${this.api_url}/tasks`;

  constructor(private http: HttpClient) { }

  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.tasksUrl)
    .pipe(map(data => data));
  }

  createTask(task: Task): Observable<Task> {
    return this.http.post<Task>(this.tasksUrl, task, httpOptions);
  }

  getTask(id: String): Observable<Task> {
    const url = `${this.tasksUrl}/${id}`;
    return this.http.get<Task>(url);
}

  updateTask(id: String, task: Task): Observable<any> {
    const url = `${this.tasksUrl}/${id}`;
    return this.http.put(url, task, httpOptions);
}

  deleteTask (id: String): Observable<Task> {
    const url = `${this.tasksUrl}/${id}`;
    return this.http.delete<Task>(url, httpOptions);
  }

}
