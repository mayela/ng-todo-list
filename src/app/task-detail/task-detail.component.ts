import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


import { Task } from '../task';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail.component.html',
  styleUrls: ['./task-detail.component.css']
})
export class TaskDetailComponent implements OnInit {
  task: Task;

  constructor(private route: ActivatedRoute, private taskService: TaskService) { }

  ngOnInit() {
    this.getTask();
  }

  getTask() {
    const id = this.route.snapshot.paramMap.get('id');
    this.taskService.getTask(id)
    .subscribe(task => this.task = task);
  }

  updateTask(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.taskService.updateTask(id, this.task)
      .subscribe(task => this.task = task);
  }

}
