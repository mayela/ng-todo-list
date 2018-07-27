import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
  user: User;

  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit() {
    this.getUser();
  }

  goBack(): void {
    this.router.navigate(['users']);
  }

  getUser() {
    const id = this.route.snapshot.paramMap.get('id');
    this.userService.getUser(id)
    .subscribe(user => this.user = user);
  }

  updateUser(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.userService.updateUser(id, this.user)
      .subscribe(user => this.user = user);
  }

  deleteUser(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.userService.deleteUser(id)
    .subscribe(() => this.goBack());
  }

}
