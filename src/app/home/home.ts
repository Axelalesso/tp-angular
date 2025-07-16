import { Component } from '@angular/core';
import { Product } from '../product/product';

@Component({
  selector: 'app-home',
  imports: [Product],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
    productos =[
      {
        nombre:'producto1',
        precio:10,
        id:1
      },
      {
        nombre:'producto2',
        precio:20,
        id:2
      },
      {
        nombre:'producto3',
        precio:30,
        id:3
      },
      {
        nombre:'producto4',
        precio:40,
        id:4
      },
      {
        nombre:'producto5',
        precio:50,
        id:5
      }
    ]
}
