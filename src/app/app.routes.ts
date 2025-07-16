import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Products } from './products/products';
import { Posts } from './posts/posts';
import { ProductDetail } from './product-detail/product-detail';

export const routes: Routes = [
  { path: 'home', component: Home },
  { path: 'products', component: Products },
  { path: 'products/:product_id', component: ProductDetail },
  { path: 'posts', component: Posts },
  { path: '**', redirectTo: 'home' }
];