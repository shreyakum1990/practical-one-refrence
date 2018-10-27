import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-product-info',
  templateUrl: './product-info.component.html',
  styleUrls: ['./product-info.component.css']
})
export class ProductInfoComponent implements OnInit {
  private prod : any = {};
  private productfor : any [] = [];
  private edit_id : string;
  private btn_stat  : boolean = true;
  constructor(private http : Http) { }

  ngOnInit() {
    this.prodrecord();
  }
  saveprod(){
    console.log(this.prod);
    this.http.post('https://my-product-info.firebaseio.com/products.json',this.prod).subscribe(
      (res)=>{
        console.log('This response is',res.json());
      },
      (err)=>{
        console.log('This is error',err);
      },
      ()=>{
        console.log('This request is complete');
        this.prod = {};
      }
    );
  }
  prodrecord(){
    this.http.get('https://my-product-info.firebaseio.com/products.json').subscribe(
      (res)=>{
        console.log('The response is',res.json())
        var cc = res.json()
        console.log(JSON.stringify(cc));
        var keys = Object.keys(cc);
        this.productfor = keys.map(
          (key)=>{
            return { data : cc[key], id : key};
          })
      },
      (err)=>{
        console.log('The error is ',err)
      },
      ()=>{
        this.prod = {};
      }
    );
  }
  deleteprod(key){
    console.log('The delete key is',key)
      this.http.delete('https://my-product-info.firebaseio.com/products/'+key+'.json').subscribe(
        (res)=>{
          console.log('delete');
        },
        (err)=>{
          console.log('The error is',err)
        },
        ()=>{
           this.prodrecord();
        }
      )
    }

    editprod(prodss){ //prodss is array
      this.prod = prodss.data; // inside the array give data &
      this.edit_id = prodss.id;// inside the array give id
      this.btn_stat = false;
    }

    updtprod(){
      this.http.put('https://my-product-info.firebaseio.com/products/'+this.edit_id+'.json',this.prod).subscribe(
        (res)=>{
          console.log('updated')
        },
        (err)=>{
          console.log('The error is', err)
        },
        ()=>{
          this.prodrecord();
          
        }
      );
    }
  
}
