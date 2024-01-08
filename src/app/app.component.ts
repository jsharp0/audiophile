import { Component } from '@angular/core';
import {
  faChevronRight,
  faMinus,
  faPlus,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'audiophile';
  faRightChevron = faChevronRight;
  faPlus = faPlus;
  faMinus = faMinus;
  value = 0;
}
