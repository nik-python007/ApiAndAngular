import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders,HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from './employee';
@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceService {

  ApiUrl = 'https://localhost:5001/';
  constructor(private httpClient: HttpClient ) { }

  GetEmployees(): Observable<Employee[]> {
    const headers = new HttpHeaders({ 'Content-Type': 'text/plain'}); 
    return this.httpClient.get<Employee[]>(this.ApiUrl+'Employee/GetEmployees');
  }
}
