import { Component } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { ProductCardComponent } from '../product-card/product-card.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-category-list',
  standalone: true,
  imports: [ProductCardComponent, CommonModule],
  template: `<div class="card-container d-flex justify-content-center">
    <app-product-card
      *ngFor="let category of categories"
      [imgSrc]="category.image"
      [title]="category.title"
      [link]="category.routerLink"
    />
  </div>`,
  styleUrls: ['category-list.component.scss'],
})
export class CategoryListComponent {
  categories = this.productService.getCategories();
  constructor(private productService: ProductService) {}
}
