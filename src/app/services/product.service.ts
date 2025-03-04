import { Injectable } from '@angular/core';
import { Product } from '../shared/product';
import { PRODUCTS } from '../shared/constants';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products:Product[]=PRODUCTS;

  getProducts():Product[]{
    return this.products;
  }
  //Méthode pour supprimer un produit de la liste des produits
   deleteProduct(id: number): void {
    const index = this.products.findIndex(product => product.id == id)
    if (index !== -1) {
      this.products.splice(index, 1);
    }
  } 

    //Méthode pour ajouter un nouveu produit
    addProduct(product: Product) {
      product.id = this.products[this.products.length - 1].id + 1;
      this.products.push(product);
    } 
  

}
