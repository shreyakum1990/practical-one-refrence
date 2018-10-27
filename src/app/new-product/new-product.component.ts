import { Component, OnInit } from '@angular/core';
import { Http, JsonpModule } from '@angular/http';
import { Key } from 'protractor';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css']
})
export class NewProductComponent implements OnInit {
  private prod : any = {};
  private producttype : any [] = [];
  private edit_id : string;
  private btn_updt : boolean = true;
  constructor(private httpsrv : Http) { }

  ngOnInit() {
    // this.prod;
    this.getprod();
  }

  saveprd(){
    console.log(this.prod)
    this.httpsrv.post('https://my-product-info.firebaseio.com/products.json',this.prod).subscribe(
      (res)=>{
        console.log('The request is',res.json())
      },
      (err)=>{
        console.log('The error is',err)
      },
      ()=>{
        console.log('The request is complete')
        this.prod={};
        this.getprod();
      }
    )
  }

  getprod(){
    this.httpsrv.get('https://my-product-info.firebaseio.com/products.json').subscribe(
      (res)=>{
        console.log('The request is',res.json())
        var jj = res.json();
        console.log(JSON.stringify(jj));
        var keys = Object.keys(jj);
        this.producttype = keys.map(
          (Key)=>{
            return { data : jj[Key], id:Key};
          })
      },
      (err)=>{
        console.log('The error is',err)
      },
      ()=>{
        console.log('The request is complete')
        
      }
    )
  }

  deleteprod(key){
    console.log('The delete key is',key)
    this.httpsrv.delete('https://my-product-info.firebaseio.com/products/'+key+'.json').subscribe(
      (res)=>{
        console.log('The response is delete')
      },
      (err)=>{
        console.log('The error is',err)
      },
      ()=>{
        console.log('the request is complete')
        this.getprod();
      }
    )
  }

  editprod(prodtype){
    this.prod = prodtype.data;
    this.edit_id = prodtype.id;
    this.btn_updt = false;
  }
}
