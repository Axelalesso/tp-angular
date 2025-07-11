import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Products } from './products/products';
import { Posts } from './posts/posts';

export const routes: Routes = [
  { path: 'home', component: Home },
  { path: 'products', component: Products },
  { path: 'posts', component: Posts },
  { path: '**', redirectTo: 'home' }
];