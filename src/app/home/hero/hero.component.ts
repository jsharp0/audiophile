import { Component } from '@angular/core';
import { faClose } from '@fortawesome/free-solid-svg-icons';
import { ButtonComponent } from '../../shared/button/button.component';

@Component({
  selector: 'app-hero-section',
  standalone: true,
  imports: [ButtonComponent],
  template: `<div class="hero-section">
    <div class="product">
      <span class="d-block subtitle-light">New Product</span>
      <h1>XX99 Mark II Headphones</h1>
      <p>
        Experience natural, lifelike audio and exceptional build quality made
        for the passionate music enthusiast.
      </p>
      <app-button
        class="primary"
        [link]="['/', 'headphones', 'XX99-Mark-II-Headphones']"
        >See Product</app-button
      >
    </div>
  </div>`,
  styleUrls: ['hero.component.scss'],
})
export class HeroSectionComponent {
  faClose = faClose;
  open = false;
  constructor() {}
}
