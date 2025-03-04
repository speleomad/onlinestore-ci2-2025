import { Component } from '@angular/core';
import { Product } from '../shared/product';
import { ProductService } from '../services/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent {
  product: Product =new Product(-1,"","",0,0,"");
  constructor(private productService: ProductService,
              private router: Router) { }
  
onSubmit() {
    this.productService.addProduct(this.product);
    this.router.navigateByUrl("/products");
  }
}