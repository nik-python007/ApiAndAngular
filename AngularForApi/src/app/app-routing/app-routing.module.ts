import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeComponent } from '../employee/employee.component';
import { EmployeeListComponent } from '../employee/employee-list/employee-list.component';

const routes: Routes = [
  {path: 'Employee', component: EmployeeComponent},
  {path: 'Employees', component: EmployeeListComponent}
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ],
  exports: [
    RouterModule,
  ]
})
export class AppRoutingModule { }
