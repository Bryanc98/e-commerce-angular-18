import { Component, input } from '@angular/core';
import { Product } from '../../../shared/intefaces/product.interface';

@Component({
  selector: 'app-products-card',
  standalone: true,
  imports: [],
  templateUrl: './products-card.component.html',
  styles: ``
})
export default class ProductsCardComponent {
  product = input.required<Product>();

}
