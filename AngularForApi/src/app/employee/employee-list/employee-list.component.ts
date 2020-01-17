import { Component, OnInit } from '@angular/core';
import { EmployeeServiceService } from '../employee-service.service';
import { Employee } from '../employee';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  constructor(private employeeservice: EmployeeServiceService) { }

  EmployeeList: Employee[];
  Temp:any[];
  ngOnInit()  {
    this.GetEmployeeList();
  }

  GetEmployeeList()  {
    this.employeeservice.GetEmployees().subscribe(result=>{
      this.Temp = result;
    });
  }

}
