import { NgClass, NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Params, RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [FontAwesomeModule, RouterModule, NgIf, NgClass],
  template: `
    <button
      [class]="type"
      [ngClass]="cssClass"
      [routerLink]="link"
      [queryParams]="params"
    >
      <ng-content></ng-content>
      <fa-icon
        *ngIf="type === 'link' && !hideIcon"
        [icon]="faRightChevron"
      ></fa-icon>
    </button>
  `,
})
export class ButtonComponent {
  faRightChevron = faChevronRight;
  @Input() type: 'primary' | 'dark' | 'outline' | 'link' = 'primary';
  @Input() link: string[] | null = [''];
  @Input() params: Params | undefined;
  @Input() hideIcon = false;
  @Input() cssClass = '';

  constructor() {}
}
