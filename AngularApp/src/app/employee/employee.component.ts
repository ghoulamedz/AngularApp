import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Employee } from '../shared/employee.model';
import { EmployeeService } from '../shared/employee.service';

declare var M: any;
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
  providers: [EmployeeService],
})
export class EmployeeComponent implements OnInit {
  constructor(public employeeService: EmployeeService) {}

  ngOnInit(): void {
    this.resetForm();
  }
  resetForm(form?: NgForm) {
    if (form) form.reset();
    this.employeeService.selectedEmployee = {
      _id: '',
      name: '',
      position: '',
      office: '',
      salary: null,
    };
  }
  onSubmit(form: NgForm) {
  //   if (form.value._id == "") {
       this.employeeService.postEmployee(form.value).subscribe((res) => {
        this.resetForm(form);
  //       this.refreshEmployeeList();
       M.toast({ html: 'Saved successfully', classes: 'rounded' });
     });
   }
  //   else {
  //     this.employeeService.putEmployee(form.value).subscribe((res) => {
  //       this.resetForm(form);
  //       this.refreshEmployeeList();
  //       M.toast({ html: 'Updated successfully', classes: 'rounded' });
  //     });
  //   }
  // }
}
