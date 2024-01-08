import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faFacebook,
  faInstagram,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterModule, FontAwesomeModule, NgIf],
  template: `
    <div class="footer">
      <img src="assets/shared/desktop/logo.svg" />
      <ul class="links">
        <li [routerLink]="['/home']">Home</li>
        <li [routerLink]="['/headphones']">Headphones</li>
        <li [routerLink]="['/speakers']">Speakers</li>
        <li [routerLink]="['/earphones']">Earphones</li>
      </ul>
      <p>
        Audiophile is an all in one stop to fulfill your audio needs. We're a
        small team of music lovers and sound specialists who are devoted to
        helping you get the most out of personal audio. Come and visit our demo
        facility - we’re open 7 days a week.
      </p>
      <span>Copyright 2021. All Rights Reserved</span>
      <div class="icons">
        <fa-icon [icon]="faFacebook"></fa-icon>
        <fa-icon [icon]="faTwitter"></fa-icon>
        <fa-icon [icon]="faInstagram"></fa-icon>
      </div>
    </div>
  `,
  styleUrls: ['footer.component.scss'],
})
export class FooterComponent {
  faFacebook = faFacebook;
  faTwitter = faTwitter;
  faInstagram = faInstagram;
  constructor() {}
}
