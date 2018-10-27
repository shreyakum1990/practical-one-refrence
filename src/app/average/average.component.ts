import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-average',
  templateUrl: './average.component.html',
  styleUrls: ['./average.component.css']
})
export class AverageComponent implements OnInit {

  constructor() { }
  private a : string ;
  private b : string ;
  private c : string ;
  private d : string ;
  private e : string ;

  ngOnInit() {
  }
  average(){
     alert("The Average of is" + ( parseInt(this.a ) + parseInt(this.b) + parseInt(this.c) + parseInt(this.d) + parseInt(this.e)/5));
  }
}
