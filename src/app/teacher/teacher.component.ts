import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.css']
})
export class TeacherComponent implements OnInit {
private teach : any = {};
private teacher : any [] = [];
  constructor(private http : Http) { }

  ngOnInit() {
    this.readrecord();
  }

  teachersave(){
    console.log(this.teach);
    this.http.post('https://new-emp-data.firebaseio.com/teachers.json',this.teach).subscribe(
      (res)=>{
        console.log('The response is',res.json())
      },
      (err)=>{
        console.log('The error  is',err)
      },
      ()=>{
        console.log('The request is complete')
        this.teach = {};
      }
    )
  }

  readrecord(){
    this.http.get('https://new-emp-data.firebaseio.com/teachers.json').subscribe(
      (res)=>{
        console.log('The response is',res.json())
        var rawData = res.json();
        var keys = Object.keys(rawData);
        console.log(keys)
        this.teacher = keys.map((key)=>{
          return rawData[key];
        })
      },
      (err)=>{
        console.log('The error is',err)
      },
      ()=>{

      }
    )
  }

}
