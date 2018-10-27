import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-info',
  templateUrl: './employee-info.component.html',
  styleUrls: ['./employee-info.component.css']
})
export class EmployeeInfoComponent implements OnInit {
  private btn_status : boolean = true;
  private emp_name  : string;
  private emp_age  :  string;
  private emp_qua : string;
  private employees : any[]=[
    {name : 'mohan', age : 29, qualification : 'eng'}
  ]
  constructor() { }
  savemp(){
    var data = {
      name:this.emp_name,
      age:this.emp_age,
      qualification:this.emp_qua
    }
    this.employees.push(data)
    this.clearform();
  }
  clearform() {
    this.emp_name='';
    this.emp_age='';
    this.emp_qua='';
  }
  deletemp(index){
    this.employees.splice(index,1);
    
  }
  editemp(employee : any){
    console.log(employee)
    this.btn_status=false;
    this.emp_name = employee.name;
    this.emp_age = employee.age;
    this.emp_qua = employee.qualification;
  }

  updatemp(){
    for(var i = 0; i < this.employees.length;i++){
      if(this.emp_name == this.employees[i].name){
        console.log('index is',i)
        this.employees[i].age=this.emp_age;
        this.employees[i].sal=this.emp_qua;
      }
    }
    console.log(this.employees)
  }
  ngOnInit() {
  }

}
