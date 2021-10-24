import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//import { Observable } from 'rxjs/Observable';
//import 'rxjs/add/operator/map';
//import 'rxjs/add/operator/toPromise';

import { Employee } from './employee.model';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  selectedEmployee: Employee = new Employee;
  employees: Employee[] = [];
  readonly baseURL = 'http://localhost:3000/employees'
  
  constructor(private http : HttpClient) {}
  
  postEmployee(emp : Employee){
    return this.http.post(this.baseURL, emp)
  }
}
