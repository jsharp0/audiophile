import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BestAudioGearComponent } from '../best-audio-gear/best-audio-gear.component';
import { ProductCardComponent } from '../shared/product-card/product-card.component';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../shared/button/button.component';
import { ProductService } from '../services/product.service';
import { CategoryListComponent } from '../shared/category-list/category-list.component';

@Component({
  selector: 'app-product-page',
  standalone: true,
  imports: [
    BestAudioGearComponent,
    ProductCardComponent,
    CommonModule,
    ButtonComponent,
    CategoryListComponent,
  ],
  template: `<div class="d-flex justify-content-center heading">
      <h2>{{ pageTitle }}</h2>
    </div>
    <div class="products">
      <div
        *ngFor="let product of products; let i = index"
        class="product"
        [ngClass]="i % 2 ? 'left-image' : ''"
      >
        <img
          [src]="
            'assets/' +
            product.imagePath +
            '/desktop/image-category-page-preview.jpg'
          "
        />
        <div>
          <span class="d-block subtitle" *ngIf="product.isNew"
            >New Product</span
          >
          <h2>{{ product.name }}</h2>

          <p>
            {{ product.description }}
          </p>
          <app-button
            type="primary"
            [link]="['/', product.type, product.name.split(' ').join('-')]"
            [params]="{ product: product.name.split(' ').join('-') }"
          >
            See Product</app-button
          >
        </div>
      </div>
    </div>
    <app-category-list />
    <app-best-audio-gear />`,
  styleUrls: ['product-page.component.scss'],
})
export class ProductPageComponent {
  pageTitle = this.activatedRoute.snapshot.data['title'];

  products = this.productService.getProductsByCategory(
    this.pageTitle.toLowerCase()
  );
  constructor(
    private activatedRoute: ActivatedRoute,
    private productService: ProductService
  ) {}
}
