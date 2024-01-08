import { ChangeDetectionStrategy, Component, ViewChild } from '@angular/core';
import { CategoryListComponent } from '../shared/category-list/category-list.component';
import { BestAudioGearComponent } from '../best-audio-gear/best-audio-gear.component';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../services/product.service';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../shared/button/button.component';
import { NumberInputComponent } from '../shared/number-input/number-input.component';
import { NgxMaskModule } from 'ngx-mask';

@Component({
  selector: 'app-product-overview',
  standalone: true,
  imports: [
    CategoryListComponent,
    BestAudioGearComponent,
    CommonModule,
    ButtonComponent,
    NumberInputComponent,
    NgxMaskModule,
  ],
  template: `
    <div class="products">
      <div *ngIf="product" class="product">
        <img
          class="product-img"
          [src]="
            'assets/' +
            product.imagePath +
            '/desktop/image-category-page-preview.jpg'
          "
        />
        <div class="product-name">
          <span class="d-block subtitle" *ngIf="product.isNew"
            >New Product</span
          >
          <h2>{{ product.name }}</h2>
          <p>{{ product.description }}</p>
          <p class="price">
            {{ product.price | currency }}
          </p>
          <div class="d-flex align-items-center">
            <app-number-input [value]="quantity ?? 0" />
            <app-button type="primary" [link]="null" (click)="addToCart()">
              Add to cart</app-button
            >
          </div>
        </div>
        <div class="product-info">
          <div class="features">
            <h3>Features</h3>
            <p [innerHTML]="product.features"></p>
          </div>
          <div class="in-the-box">
            <h3>In the box</h3>
            <ul>
              <li *ngFor="let item of inTheBoxItems">
                <span class="quantity">{{ item.quantity }}x</span
                >{{ item.item }}
              </li>
            </ul>
          </div>
        </div>

        <div class="image-gallery">
          <img
            class="gallery-image-1"
            [src]="
              'assets/' + product.imagePath + '/desktop/image-gallery-1.jpg'
            "
          />

          <img
            class="gallery-image-2"
            [src]="
              'assets/' + product.imagePath + '/desktop/image-gallery-2.jpg'
            "
          />

          <img
            class="gallery-image-3"
            [src]="
              'assets/' + product.imagePath + '/desktop/image-gallery-3.jpg'
            "
          />
        </div>
      </div>
    </div>
    <app-category-list /> <app-best-audio-gear />
    <dialog (click)="closeDialog($event)">
      <div class="dialog" id="dialog-content">
        <div class="heading d-flex justify-content-between">
          <h6>Cart ({{ itemQuanity }})</h6>
          <app-button
            [link]="null"
            type="link"
            [hideIcon]="true"
            (click)="clearCart()"
            >Remove all</app-button
          >
        </div>
        <div>
          <div class="summary-product" *ngFor="let cartItem of cart">
            <img
              src="assets/{{
                cartItem.item
              }}/desktop/image-category-page-preview.jpg"
            />
            <div class="name-and-price">
              <span class="product-name">{{
                getProductName(cartItem.item)
              }}</span>
              <span class="product-price">$2,999</span>
            </div>
            <div>
              <app-number-input [value]="cartItem.quantity" />
            </div>
          </div>
        </div>
        <app-button
          cssClass="checkout-button"
          type="primary"
          [link]="['/', 'checkout']"
          >Checkout</app-button
        >
      </div>
    </dialog>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['product-overview.component.scss'],
})
export class ProductOverviewComponent {
  productName = this.activatedRoute.snapshot.params['id'];
  product = this.productService.getProductByName(
    this.productName.split('-').join(' ')
  );
  cart = this.productService.cart;
  quantity = this.productService.cart.filter(
    (c) => c.item === this.productName
  )[0]?.quantity;
  inTheBoxItems = this.productService.getInTheBox(
    this.product?.type ?? 'headphones'
  );

  get itemQuanity() {
    return this.productService.cart
      .map((c) => c.quantity)
      .reduce((partialSum, a) => partialSum + a, 0);
  }
  @ViewChild(NumberInputComponent) numberInput:
    | NumberInputComponent
    | undefined;

  constructor(
    private activatedRoute: ActivatedRoute,
    private productService: ProductService
  ) {
    window.scrollTo({ top: 0 });
  }

  addToCart() {
    if (this.numberInput) {
      const quantity = this.numberInput.value;
      if (!quantity) return;
      this.productService.addToCart(
        `product-${this.productName}`.toLowerCase(),
        quantity
      );
    }
    const dialog = document.querySelector('dialog');
    dialog?.showModal();
  }

  clearCart() {
    this.productService.cart = [];
  }

  getProductName(imagePath: string) {
    return this.productService.products.find((p) => p.imagePath === imagePath)
      ?.name;
  }

  closeDialog(e: MouseEvent) {
    const clickedEl = (e.target as any).nodeName;
    if (clickedEl === 'DIALOG') {
      const dialog = document.querySelector('dialog');
      dialog?.close();
    }
  }
}
