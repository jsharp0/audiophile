import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons';
import { HeroSectionComponent } from './hero/hero.component';
import { ProductCardComponent } from '../shared/product-card/product-card.component';
import { ProductsComponent } from './products/products.component';
import { BestAudioGearComponent } from '../best-audio-gear/best-audio-gear.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    RouterModule,
    FontAwesomeModule,
    NgIf,
    HeroSectionComponent,
    ProductCardComponent,
    NgFor,
    ProductsComponent,
    BestAudioGearComponent,
  ],
  template: `<app-hero-section></app-hero-section>
    <div class="card-container d-flex justify-content-center">
      <app-product-card
        *ngFor="let product of productCategories"
        [imgSrc]="product.image"
        [title]="product.title"
        [link]="product.routerLink"
      />
    </div>
    <app-products />
    <app-best-audio-gear />`,
  styleUrls: ['home.component.scss'],
})
export class HomeComponent {
  faClose = faClose;
  open = false;
  productCategories = [
    {
      title: 'Headphones',
      routerLink: 'headphones',
      image: 'assets/shared/desktop/image-category-thumbnail-headphones.png',
    },
    {
      title: 'Speakers',
      routerLink: 'speakers',
      image: 'assets/shared/desktop/image-category-thumbnail-speakers.png',
    },
    {
      title: 'Earphones',
      routerLink: 'earphones',
      image: 'assets/shared/desktop/image-category-thumbnail-earphones.png',
    },
  ];
  constructor() {}
}
