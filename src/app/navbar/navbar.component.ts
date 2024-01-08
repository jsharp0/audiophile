import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule, FontAwesomeModule, NgIf],
  template: `
    <nav>
      <div class="nav d-flex">
        <img
          (click)="open = true"
          class="nav-toggle"
          src="assets/shared/tablet/icon-hamburger.svg"
        />
        <img class="navbar-brand" src="assets/shared/desktop/logo.svg" />
        <ul class="links">
          <li [routerLink]="['/home']">Home</li>
          <li [routerLink]="['/headphones']">Headphones</li>
          <li [routerLink]="['/speakers']">Speakers</li>
          <li [routerLink]="['/earphones']">Earphones</li>
        </ul>
        <img
          class="cart"
          [routerLink]="['/checkout']"
          src="assets/shared/desktop/icon-cart.svg"
        />
      </div>
    </nav>

    <ul class="navlinks-popover" *ngIf="open">
      <fa-icon [icon]="faClose" (click)="open = false"></fa-icon>
      <li [routerLink]="['/home']">Home</li>
      <li [routerLink]="['/headphones']">Headphones</li>
      <li [routerLink]="['/speakers']">Speakers</li>
      <li [routerLink]="['/earphones']">Earphones</li>
    </ul>
  `,
  styleUrls: ['navbar.component.scss'],
})
export class NavBarComponent {
  faClose = faClose;
  open = false;
}
