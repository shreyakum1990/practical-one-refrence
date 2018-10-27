import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css']
})
export class BindingComponent implements OnInit {
  //binding data through ngmodel
  private sal : number = 10;

  // addition
  private a : string;
  private b : string;

  // marks
  private p : string;
  private c : string;
  private e : string;
  private m : string;
  private h : string;
  private avg : number;

  //find area and circumference
  private radius : string;
  private area : number;
  private circum : number;

  // herons formula
  private a1 : string;
  private b2 : string;
  private c3 : string;
  private s: number;
  private area1 : number;

  constructor() { }

  // addition

  add(){
    var t1 = parseInt(this.a);
    var t2 = parseInt(this.b);
    alert("the sum of"+(t1+t2));
  }

  // marks
  marks(){
    var t1 = parseInt(this.p);
    var t2 = parseInt(this.c);
    var t3 = parseInt(this.e);
    var t4 = parseInt(this.m);
    var t5 = parseInt(this.h);
    this.avg = t1+t2+t3+t4+t5/5.0;
    // alert("The avg is" + (t1+t2+t3+t4+t5)/5);
  }

  //find area and circumference

  findarea(){
    var t1 = parseInt(this.radius);
    this.area = 3.14 * t1;
  }

  findcircum(){
    var t1 = parseInt(this.radius);
    this.circum = 2*3.14*t1;
  }

  //herons formula
  semipmtr(){
    // alert(this.a + this.b + this.c/2);
    var t1 = parseInt(this.a1);
    var t2 = parseInt(this.b2);
    var t3 = parseInt(this.c3);
    this.s=(t1+t2+t3)/2.0;
  }
  findarea1(){
    
  }
  ngOnInit() {
    
  }

}
