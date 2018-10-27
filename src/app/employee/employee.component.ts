import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
private btn_stat : boolean =true;
private emps : any = {};
private empqa : any [] = [];
private edit_id : string;
  constructor(private http : Http) { }

  ngOnInit() {
    this.emprecord();
  }

  empsave(){
    console.log(this.emps);
    this.http.post('https://emp-info-fa567.firebaseio.com/employees.json',this.emps).subscribe(
      (res)=>{
        console.log('The response is', res.json())
      },
      (err)=>{
        console.log('The error is ',err)
      },
      ()=>{
        console.log('The request is complete')
        this.emps = {};
      }
    )
  }

  deleteemp(key){
    console.log('The delete key is',key)
    this.http.delete('https://emp-info-fa567.firebaseio.com/employees/'+key+'.json').subscribe(
      (res) =>{
        console.log('delete');
      },
      (err) =>{
        console.log('The error is',err)
      },
      ()=>{
        this.emprecord();
      }
    )
  }

  emprecord(){
    this.http.get('https://emp-info-fa567.firebaseio.com/employees.json').subscribe(
      (res)=>{
        console.log('The response is',res.json())
        // var rawData = res.json();
        // var keys = Object.keys(rawData);
        // console.log(JSON.stringify(keys));
        var cc = res.json()
        console.log(JSON.stringify(cc));
        var keys = Object.keys(cc);
        this.empqa = keys.map(
          (key)=>{
            // return rawData[key];
            //return cc[key]
            return { data : cc[key], id : key};
          })
      },
      (err)=>{
        console.log('The error is',err)
      },
      ()=>{

      }
    );
  }

  editemp(empss){
    this.emps = empss.data;
    this.edit_id = empss.id;
    this.btn_stat = false;
  }

  updtsave(){
    this.http.put('https://emp-info-fa567.firebaseio.com/employees/'+this.edit_id+'.json',this.emps).subscribe(
      (res) =>{
        console.log('updated')
      },
      (err)=>{
        console.log('the error is',err)
      },
      ()=>{
        this.emprecord();
      }
    );
  }

}
