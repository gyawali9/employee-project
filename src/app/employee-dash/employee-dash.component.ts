import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ApiService } from '../shared/api.service';
import { EmployeeData } from './employee.model';

@Component({
  selector: 'app-employee-dash',
  templateUrl: './employee-dash.component.html',
  styleUrls: ['./employee-dash.component.css']
})

export class EmployeeDashComponent implements OnInit {

  formValue!: FormGroup;
  employeeModelObj: EmployeeData = new EmployeeData;
  allEmployeeData: any;

  showAdd!:boolean;
  showBtn!:boolean;


  constructor(private formBuilder: FormBuilder, private api:ApiService) { }

  ngOnInit(): void {
    this.formValue = this.formBuilder.group({   
      name: [''],
      salary: [''],
      age: [''],
    })
    this.getAllData()
  }
  clickAddEmployee(){
    this.formValue.reset();
    this.showAdd = true;
    this.showBtn = false;
  }

  // Subscribing our data which is mapped through services
  addData(){
    this.employeeModelObj.name = this.formValue.value.name;
    this.employeeModelObj.salary = this.formValue.value.salary;
    this.employeeModelObj.age = this.formValue.value.age;
    // this.employeeModelObj.address = this.formValue.value.address;
    // this.employeeModelObj.services = this.formValue.value.services;

    this.api.postEmployee(this.employeeModelObj).subscribe(res=>{
      console.log(res);
      alert('Employee record added successfully');

      // clear fill form data
      let ref = document.getElementById('clear');
      ref?.click();
      this.formValue.reset();
      this.getAllData(); // when we post any data
    },
    err=>{
      alert('Error in adding employee records');
    }
    )
  }


  // getAll data
  getAllData(){
    this.api.getEmployee().subscribe(res=>{
      this.allEmployeeData  = res;
    })
  }

  // delete records
  deleteData(data:any){
    this.api.deleteEmployee(data.id).subscribe(res=>{
      alert("Employee Records deleted!");
      this.getAllData();
    })
  }

  // editing records
  editData(data:any){
    this.showAdd = false;
    this.showBtn = true;

    this.employeeModelObj.id = data.id;
    this.formValue.controls['name'].setValue(data.name);
    this.formValue.controls['salary'].setValue(data.salary);
    this.formValue.controls['age'].setValue(data.age);
  }

  updateData(){
    this.employeeModelObj.name = this.formValue.value.name;
    this.employeeModelObj.salary = this.formValue.value.salary;
    this.employeeModelObj.age = this.formValue.value.age;


    this.api.updateEmployee(this.employeeModelObj, this.employeeModelObj.id).subscribe(res=>{
      alert('Restaurant Records Updated')


      let ref = document.getElementById('clear');
      ref?.click();
      this.formValue.reset();
      this.getAllData(); // when we post any data
    })
  }

}
