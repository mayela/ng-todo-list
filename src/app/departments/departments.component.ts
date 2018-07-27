import { Component, OnInit } from '@angular/core';
import { DepartmentService } from '../department.service';
import { Department } from '../department';

@Component({
  selector: 'app-departments',
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.css']
})
export class DepartmentsComponent implements OnInit {
  public newDepartment: Department = new Department();
  departments: Department[];

  constructor(private departmentService: DepartmentService) { }

  ngOnInit() {
    this.getDepartments();
  }

  getDepartments(): void {
    this.departmentService.getDepartments()
    .subscribe(departments => this.departments = departments);
  }

  createDepartment(): void {
    this.departmentService.createDepartment(this.newDepartment)
    .subscribe(department => {
      this.departments.push(department);
      this.newDepartment = new Department(); });
  }

}
