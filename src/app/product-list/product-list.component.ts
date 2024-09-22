import { Component } from '@angular/core';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  name = 'John Doe';
  
  product={
    name :'iphone13',
    price: 999,
    color:'Red',
    discount:8.5,
    inStock: 5,
    pImage : "angular-ekart/src/assets/images/dog1.jpeg"
  }

  getDiscountedPrice(){
    return this.product.price - (this.product.price * this.product.discount) / 100;
  }
  
  onNameChange(event: any){
    this.name = event.target.value;
    console.log(this.name);
  }
  
}
