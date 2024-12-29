import { Component } from '@angular/core';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent {
  // name = 'John Doe';
  // addToCart: number = 0;
  // product={
  //   name :'iphone13',
  //   price: 999,
  //   color:'Red',
  //   discount:8.5,
  //   inStock: 5,
  //   pImage : "angular-ekart/src/assets/images/dog1.jpeg"
  // }

  // getDiscountedPrice(){
  //   return this.product.price - (this.product.price * this.product.discount) / 100;
  // }
  
  // onNameChange(event: any){
  //   this.name = event.target.value;
  //   console.log(this.name);
  // }

  // decrementCartValue(){
  //   if(this.addToCart > 0)
  //     this.addToCart--;
  //   else
  //     this.addToCart = 0;
    
  //   }
  

  // incrementCartValue(){ 
  //   if(this.addToCart < this.product.inStock)   
  //     this.addToCart++;
  //   else
  //     this.addToCart = this.product.inStock;
    
  //   }

  searchText: string = '';
  
  setSearchText(value: any){
    console.log(this.searchText);
    this.searchText = value;
  }
}
