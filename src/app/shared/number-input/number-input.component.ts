import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';

@Component({
  standalone: true,
  selector: 'app-number-input',
  imports: [FontAwesomeModule, RouterModule],
  template: `
    <div class="numbers-input">
      <fa-icon
        [icon]="faMinus"
        (click)="value > 0 ? (value = value - 1) : value"
      ></fa-icon>
      <span>{{ value }}</span>
      <fa-icon [icon]="faPlus" (click)="value = value + 1"></fa-icon>
    </div>
  `,
})
export class NumberInputComponent {
  @Input() value = 0;
  faPlus = faPlus;
  faMinus = faMinus;

  constructor() {}
}
