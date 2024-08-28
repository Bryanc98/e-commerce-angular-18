import { Component, inject } from '@angular/core';
import { ProductsStateService } from '../../data-access/products.state.service';
import { ProductsService } from '../../data-access/products.service';
import ProductCardComponent from '../../ui/products-card/products-card.component';
import LoaderComponent from '../../../shared/ui/loader/loader.component';
@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [ProductCardComponent, LoaderComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
  providers: [ProductsStateService,ProductsService]
})
export default class ProductListComponent {

  productsState = inject(ProductsStateService);

  changePage() {
    const page = this.productsState.state.page() + 1;
    this.productsState.ChangePage$.next(page);
  }

}
