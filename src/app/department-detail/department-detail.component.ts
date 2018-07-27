import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


import { DepartmentService } from '../department.service';
import { Department } from '../department';

@Component({
  selector: 'app-department-detail',
  templateUrl: './department-detail.component.html',
  styleUrls: ['./department-detail.component.css']
})
export class DepartmentDetailComponent implements OnInit {
  department: Department;

  constructor(
    private route: ActivatedRoute,
    private departmentService: DepartmentService,
    private router: Router
  ) { }

  ngOnInit() {
    this.getDepartment();
  }

  goBack(): void {
    this.router.navigate(['departments']);
  }

  getDepartment() {
    const id = this.route.snapshot.paramMap.get('id');
    this.departmentService.getDepartment(id)
    .subscribe(department => this.department = department);
  }

  updateDepartment(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.departmentService.updateDepartment(id, this.department)
      .subscribe(department => this.department = department);
  }

  deleteDepartment(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.departmentService.deleteDepartment(id)
    .subscribe(() => this.goBack());
  }

}
