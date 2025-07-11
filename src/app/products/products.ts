import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsService, ProductInterface } from '../services/products.service';

@Component({
  selector: 'app-products',
  imports: [CommonModule],
  templateUrl: './products.html',
  styleUrls: ['./products.css'],
  standalone: true,
})
export class Products implements OnInit {
  products: ProductInterface[] = [];
  loading = true;
  private productsService = inject(ProductsService);

  ngOnInit() {
    const products_observable = this.productsService.getProducts();
    products_observable.subscribe({
      next: (products) => {
        this.products = products;
        this.loading = false;
      },
      error: (error) => {
        console.log(error);
      }
    });
  }
}
