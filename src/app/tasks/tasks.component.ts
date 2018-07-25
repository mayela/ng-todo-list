import { Component, OnInit } from '@angular/core';


import { Task } from '../task';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  public newTask: Task = new Task();
  tasks: Task[];

  constructor(private taskService: TaskService) { }

  ngOnInit() {
    this.getTasks();
  }

  getTasks(): void {
    this.taskService.getTasks()
    .subscribe(tasks => this.tasks = tasks);
  }

  createTask(): void {
    this.taskService.createTask(this.newTask)
    .subscribe(task => {
      this.tasks.push(task);
      this.newTask = new Task(); });
  }
}
