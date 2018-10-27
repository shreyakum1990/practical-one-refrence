import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-actor-info',
  templateUrl: './actor-info.component.html',
  styleUrls: ['./actor-info.component.css']
})
export class ActorInfoComponent implements OnInit {
  private act : any = {};
  private actortype : any [] = [];
  private edit_id : string;
  private btn_updt : boolean = true;
  constructor(private http_url : Http) { }

  ngOnInit() {
    this.recordactor()
  }

  saveactor(){
    console.log(this.act)
    this.http_url.post('https://actor-346dd.firebaseio.com/actors.json',this.act).subscribe(
      (res)=>{
        console.log("The response is", res.json())
      },
      (err)=>{
        console.log("The error is",err)
      },
      ()=>{
        console.log("The request is complete")
        this.act={};
      }
    )
  }

  recordactor(){
    this.http_url.get('https://actor-346dd.firebaseio.com/actors.json').subscribe(
      (res)=>{
        console.log("The request is", res.json())
        var act_type = res.json()
        console.log(JSON.stringify(act_type))
        var keys = Object.keys(act_type)
        this.actortype = keys.map(
         (key) =>{
           return { data : act_type[key], id:key}
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


  deleteactor(key){
    console.log("The delete key is",key)
    this.http_url.delete('https://actor-346dd.firebaseio.com/actors/'+key+'.json').subscribe(
      (res)=>{
        console.log("The response is delete",res.json())
      },
      (err)=>{
        console.log("The error is",err)
      },
      ()=>{
        console.log("The request is complete")
        this.recordactor()
      }
    )
  }

  editactor(actorss){
    this.act = actorss.data
    this.edit_id = actorss.id
    this.btn_updt = false
  }

  updtactor(){
    this.http_url.put('https://actor-346dd.firebaseio.com/actors/'+this.edit_id+'.json',this.act).subscribe(
      (res)=>{
        console.log("The response is",res.json())
      },
      (err)=>{
        console.log("The error is",err)
      },
      ()=>{
        console.log("The request is complete")
        this.recordactor()
        this.act={};
        this.btn_updt=true;
      }
    )
  }
}
