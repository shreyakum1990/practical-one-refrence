import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crud-one',
  templateUrl: './crud-one.component.html',
  styleUrls: ['./crud-one.component.css']
})
export class CrudOneComponent implements OnInit {
  private emp_name : string;
  private emp_age : string;
  private emp_sal : string;
  private emps : any[] = [
    {name: 'shreya', age: 29, sal: 25000},
    {name: 'saurabh', age: 34, sal: 1900000}
  ];
  constructor() { }

  ngOnInit() {
  }

  save(){
    console.log(this.emp_name + "-" + this.emp_age + "-" + this.emp_sal)
    var raw ={
      name:this.emp_name,
      age:this.emp_age,
      sal:this.emp_sal
    }
    this.emps.push(raw);
    this.clear();
  }

  clear(){
    this.emp_name="";
    this.emp_age="";
    this.emp_sal="";
  }

  delete(index){
    this.emps.splice(index,1)
  }

  edit(curRecord){
    console.log("in edit fn");
    this.emp_name= curRecord.name;
    this.emp_age=curRecord.age;
    this.emp_sal=curRecord.sal;
  }
}
