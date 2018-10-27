import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addition',
  templateUrl: './addition.component.html',
  styleUrls: ['./addition.component.css']
})
export class AdditionComponent implements OnInit {

  constructor() { }
  private a : number = 10;
  private b : number = 60;

  ngOnInit() {
  }

  add(){
    alert("The sum is" + (this.a + this. b));
  }
}
