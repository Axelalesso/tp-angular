import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.html',
  styleUrl: './product.css'
})
export class Product {
  @Input() nombre : string = ''
  @Input() precio : number = 0
}
