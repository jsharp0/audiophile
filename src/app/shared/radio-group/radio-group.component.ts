import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  standalone: true,
  selector: 'app-radio-group',
  imports: [FontAwesomeModule, RouterModule, CommonModule],
  template: `
    <div class="radio-group">
      <div class="radio-item" *ngFor="let item of items; let i = index">
        <input
          id="radio-{{ i }}"
          [name]="item.name"
          type="radio"
          [value]="item.value"
          [checked]="value === item.value"
          (change)="optionChange.emit(item.value)"
        />
        <label for="radio-{{ i }}" class="radio-label">{{ item.label }}</label>
      </div>
    </div>
  `,
  styles: [],
})
export class RadioGroupComponent {
  @Input() value = '';
  @Input() items: { name: string; label: string; value: string }[] = [];
  @Output() optionChange = new EventEmitter();

  constructor() {}
}
