import { Component, OnInit } from '@angular/core';
import { IProduct } from '../shopCart-interfaces/product';
import { ICategory } from '../shopCart-interfaces/category';
@Component({
  selector: 'app-view-products',
  templateUrl: './view-products.component.html',
  styleUrls: ['./view-products.component.css']
})
export class ViewProductsComponent implements OnInit {

  products: IProduct[];
  showMsgDiv: boolean = false;
  categories: ICategory[];
  filteredProducts: IProduct[];
  imageSrc: string;
  constructor() { }

  ngOnInit(): void {
    this.products = [
      { "productId": "P101", "productName": "Lamborghini Gallardo Spyder", "categoryId": 1, "price": 18000000, "quantityAvailable": 10 },
      { "productId": "P102", "productName": "Ben Sherman Mens Necktie Silk Tie", "categoryId": 2, "price": 1847, "quantityAvailable": 20 },
      { "productId": "P103", "productName": "BMW Z4", "categoryId": 1, "price": 6890000, "quantityAvailable": 10 },
      { "productId": "P104", "productName": "Samsung Galaxy S4", "categoryId": 3, "price": 38800, "quantityAvailable": 100 }
    ]
    this.categories = [
      { "categoryId": 1, "categoryName": "Motors" },
      { "categoryId": 2, "categoryName": "Fashion" },
      { "categoryId": 3, "categoryName": "Electronics" }
    ]
    if (this.products == null) {
      this.showMsgDiv = true;
    }
    this.filteredProducts = this.products;
    this.imageSrc = "C:\Users\sudheer.nayak\ShopCart\ShopCartApp\src\assets\add-item.jpg";
  }
  searchProductByCategory(categoryId: string) {
    this.filteredProducts = this.products;
    if (categoryId == "0") {
      this.filteredProducts = this.products;
    }
    else {
      this.filteredProducts = this.filteredProducts.filter(prod => prod.categoryId.toString() == categoryId);
    }
  }

}
