import { Component, OnInit } from '@angular/core';
import { TryCatchStmt } from '@angular/compiler';

@Component({
  selector: 'app-herons',
  templateUrl: './herons.component.html',
  styleUrls: ['./herons.component.css']
})
export class HeronsComponent implements OnInit {
  private a : string;
  private b : string;
  private c : string;
  private s : number;
  private s2 : number;
  constructor() { }
    
  ngOnInit() {
  }

  semiperimeter(){
    var s1 = (parseInt(this.a)+parseInt(this.b)+parseInt(this.c))/2;
    this.s=s1;
    console.log(this.s);
   
  }
  areafind(){
    var area  =  (Math.sqrt(this.s*(this.s-parseInt(this.a))*(this.s-parseInt(this.b))*(this.s-parseInt(this.c))))
    //this.s=this.semiperimeter();
    this.s2 = area;
    console.log(Math.round(this.s2)); 
  }
   
}
