import { Component, OnInit } from '@angular/core';


import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  public newUser: User = new User()
  users: User[];

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.getUsers();
  }

  getUsers(): void {
    this.userService.getUsers()
    .subscribe(users => this.users = users);
  }

  createUser(): void {
    this.userService.createUser(this.newUser)
    .subscribe(user => {
      this.users.push(user);
      this.newUser = new User(); });
  }
}
