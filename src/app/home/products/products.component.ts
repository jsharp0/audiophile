import { Component } from '@angular/core';
import { ButtonComponent } from '../../shared/button/button.component';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [ButtonComponent],
  template: ` <div class="products d-flex">
    <div class="zx9-speaker">
      <div class="flex-50">
        <img src="assets/home/desktop/image-speaker-zx9.png" />
      </div>
      <div class="flex-50 text-content">
        <h1>ZX9 SPEAKER</h1>

        <p>
          Upgrade to premium speakers that are phenomenally built to deliver
          truly remarkable sound.
        </p>
        <app-button type="dark" [link]="['/', 'speakers', 'ZX9-SPEAKER']"
          >See Product</app-button
        >
      </div>
    </div>
    <div class="zx7-speaker">
      <h4>ZX7 SPEAKER</h4>
      <app-button type="outline" [link]="['/', 'speakers', 'ZX7-SPEAKER']"
        >See Product</app-button
      >
    </div>
    <div class="earphones"></div>
    <div class="yx1-earphones">
      <div class="content">
        <h4>YX1 Earphones</h4>
        <app-button
          type="outline"
          [link]="['/', 'earphones', 'YX1-Wireless-Earphones']"
          >See Product</app-button
        >
      </div>
    </div>
  </div>`,
  styleUrls: ['products.component.scss'],
})
export class ProductsComponent {
  constructor() {}
}
