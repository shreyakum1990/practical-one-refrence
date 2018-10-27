import { Component, OnInit } from '@angular/core';
import { getTypeNameForDebugging } from '@angular/common/src/directives/ng_for_of';

@Component({
  selector: 'app-doctor-info',
  templateUrl: './doctor-info.component.html',
  styleUrls: ['./doctor-info.component.css']
})
export class DoctorInfoComponent implements OnInit {
  private doc_name : string;
  private doc_age : string;
  private doc_speciality : string;
  private doc_mobile : string;
  private doc_email : string;
  private doctors : any[]=[
    {name:'ram',age:29,speciality:'neuro',mobile:9999999999,email:'something@gmail.com'}
  ]
  constructor() { }

  savedoc(){
    var data = {
      name:this.doc_name,
      age:this.doc_age,
      speciality:this.doc_speciality,
      mobile:this.doc_mobile,
      email:this.doc_email
    }
    this.doctors.push(data)
    this.clearform();
  }

  clearform(){
    this.doc_name='';
    this.doc_age='';
    this.doc_mobile='';
    this.doc_email='';
    this.doc_speciality='';
  }

  editdoc(doctor : any){
    console.log(doctor);
    this.doc_name=doctor.name;
    this.doc_age=doctor.age;
    this.doc_speciality=doctor.speciality;
    this.doc_mobile=doctor.mobile;
    this.doc_email=doctor.email;
  }

  deletedoc(index){
    this.doctors.splice(index,1)
  }

  ngOnInit() {
  }

}
