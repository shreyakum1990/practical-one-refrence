import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  private btn_stt : boolean = true;
  private product_name : string;
  private product_cost : string;
  private product_brand : string;
  private products : any [] = [
    {name:'mobile',cost:'120000',brand:'vodafone'}
  ]
  constructor() { }

  saveProduct(){
    var data= {
      name:this.product_name,
      cost:this.product_cost,
      brand:this.product_brand
    }
    this.products.push(data)
    this.clearform();
  }

  deleteProduct(index){
    this.products.splice(index,1)
  }

  editProduct(product : any){
    console.log(product)
    this.btn_stt=false;
    this.product_name = product.name;
    this.product_cost = product.cost;
    this.product_brand = product.brand;
  }

  clearform(){
    this.product_name='';
    this.product_cost='';
    this.product_brand='';
  }
  ngOnInit() {
  }

}
