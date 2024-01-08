import { Component, Input } from '@angular/core';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [ButtonComponent],
  template: `<div class="product-card">
    <div class="card-content">
      <div class="image-container">
        <img [src]="imgSrc" />
      </div>
      <h6>{{ title }}</h6>
      <app-button type="link" [link]="['/', link]">Shop</app-button>
    </div>
  </div>`,
  styleUrls: ['product-card.component.scss'],
})
export class ProductCardComponent {
  @Input() imgSrc = '';
  @Input() title = '';
  @Input() link = '';
  constructor() {}
}
