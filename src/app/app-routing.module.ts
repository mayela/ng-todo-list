import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { UsersComponent } from './users/users.component';
import { TasksComponent } from './tasks/tasks.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { TaskDetailComponent } from './task-detail/task-detail.component';

const routes: Routes = [
    { path: '', redirectTo: '/users', pathMatch: 'full' },
    { path: 'users', component: UsersComponent },
    { path: 'users/:id', component: UserDetailComponent },
    { path: 'tasks', component: TasksComponent },
    { path: 'tasks/:id', component: TaskDetailComponent }

  ];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
  })
  export class AppRoutingModule {}
