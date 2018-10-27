import { Component, OnInit } from '@angular/core';
import { TriService } from './services/triangle.service';
// import { Http } from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  constructor(private sumarea : TriService)
  {
    // private http: Http
  }

  ngOnInit() {
    // this.http.get("https://reqres.in/api/users?page=2").subscribe(
    //   (res) => {
    //     console.log('The response is', res.json());
    //   },
    //   (err) => {
    //     console.log('The error is', err)
    //   }
    // )
  }


}
