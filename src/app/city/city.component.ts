import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.css']
})
export class CityComponent implements OnInit {
private citi : any = {};
private citytype : any [] = [];
private edit_id : string;
private btn_updt : boolean = true;
  constructor(private http_srv : Http) { }

  ngOnInit() {
    this.getRecord()
  }

  saveRecord(){
    console.log(this.citi);
    this.http_srv.post('https://city-info-c80c3.firebaseio.com/cities.json',this.citi).subscribe(
      (res)=>{
        console.log('The response is',res.json())
      },
      (err)=>{
        console.log('The error is',err)
      },
      ()=>{
        console.log('The request is complete')
        this.citi={};
      }
    )
  }

  getRecord(){
    this.http_srv.get('https://city-info-c80c3.firebaseio.com/cities.json').subscribe(
      (res)=>{
        console.log("The request is", res.json())
        var citi_type = res.json()
        console.log(JSON.stringify(citi_type))
        var keys = Object.keys(citi_type)
        this.citytype = keys.map(
         (key) =>{
           return { data : citi_type[key], id:key}
         })
      },
      (err)=>{
        console.log("The error is",err)
      },
      ()=>{
        console.log("The request is complete")
      }
    )
  }

  deleteciti(key){
    console.log("The delete key is",key)
    this.http_srv.delete('https://city-info-c80c3.firebaseio.com/cities/'+key+'.json').subscribe(
      (res)=>{
        console.log('The response is',res.json())
      },
      (err)=>{
        console.log('The error is',err)
      },
      ()=>{
        console.log('The request is complete')
        this.getRecord()
      }
    )
  }

  editciti(citiess){
    this.citi = citiess.data
    this.edit_id = citiess.id
    this.btn_updt = false
  }

  updateRecord(){
    this.http_srv.put('https://city-info-c80c3.firebaseio.com/cities/'+this.edit_id+'.json',this.citi).subscribe(
      (res)=>{
        console.log("The response is",res.json())
      },
      (err)=>{
        console.log("The error is",err)
      },
      ()=>{
        console.log("The request is complete")
        this.getRecord()
        this.citi={};
        this.btn_updt=true;
      }
    )
  }
}
