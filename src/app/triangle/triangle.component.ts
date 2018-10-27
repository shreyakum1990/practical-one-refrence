import { Component, OnInit } from '@angular/core';
import { TriService } from '../services/triangle.service';

@Component({
  selector: 'app-triangle',
  templateUrl: './triangle.component.html',
  styleUrls: ['./triangle.component.css']
})
export class TriangleComponent implements OnInit {
private a : string;
private b: string;
private c : string;
  constructor( private tri : TriService) { }

  ngOnInit() {
  }

  getArea(){
    var t1 = parseFloat(this.a);
    var t2 = parseFloat(this.b);
    var t3 = parseFloat(this.c);
    this.tri.area(t1,t2,t3);
    console.log(this.tri)
  }
}
