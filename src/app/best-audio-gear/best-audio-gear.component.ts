import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-best-audio-gear',
  standalone: true,
  imports: [],
  template: `<div class="d-flex align-items-center container">
    <div>
      <h2>Bringing you the <span>best</span> audio gear</h2>
      <p>
        Located at the heart of New York City, Audiophile is the premier store
        for high end headphones, earphones, speakers, and audio accessories. We
        have a large showroom and luxury demonstration rooms available for you
        to browse and experience a wide range of our products. Stop by our store
        to meet some of the fantastic people who make Audiophile the best place
        to buy your portable audio equipment.
      </p>
    </div>
    <img src="assets/shared/desktop/image-best-gear.jpg" />
  </div>`,
  styleUrls: ['best-audio-gear.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BestAudioGearComponent {}
