import { Component } from '@angular/core';
import { ButtonComponent } from '../shared/button/button.component';
import { RadioGroupComponent } from '../shared/radio-group/radio-group.component';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { NgxMaskModule } from 'ngx-mask';
import { ProductService } from '../services/product.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [
    ButtonComponent,
    RadioGroupComponent,
    NgxMaskModule,
    ReactiveFormsModule,
    CommonModule,
  ],
  template: `<div class="checkout">
      <app-button [hideIcon]="true" type="link">Go Back</app-button>
      <div class="d-flex">
        <form [formGroup]="form">
          <h3 class="full-width">Checkout</h3>
          <span class="category-label">Billing details</span>
          <div class="field half-width">
            <label>Name</label>
            <input
              type="text"
              placeholder="Alexei Ward"
              formControlName="name"
              [class.error]="form.controls.name.invalid && submitted"
            />
          </div>
          <div class="field half-width">
            <label>Email Address</label>
            <input
              type="text"
              placeholder="alexei@mail.com"
              formControlName="email"
              [class.error]="form.controls.email.invalid && submitted"
            />
          </div>

          <div class="field half-width">
            <label>Phone Number</label>
            <input
              type="text"
              placeholder="+1 202-555-0136"
              mask="(000) 000-0000"
              formControlName="phoneNumber"
              [class.error]="form.controls.phoneNumber.invalid && submitted"
            />
          </div>
          <span class="category-label">Shipping info</span>
          <div class="field full-width">
            <label>Address</label>
            <input
              type="text"
              placeholder="1137 Williams Avenue"
              formControlName="address"
              [class.error]="form.controls.address.invalid && submitted"
            />
          </div>
          <div class="field half-width">
            <label>Zip Code</label>
            <input
              type="text"
              placeholder="10001"
              formControlName="zipCode"
              [class.error]="form.controls.zipCode.invalid && submitted"
            />
          </div>
          <div class="field half-width">
            <label>City</label>
            <input
              type="text"
              placeholder="New York"
              formControlName="city"
              [class.error]="form.controls.city.invalid && submitted"
            />
          </div>
          <div class="field half-width">
            <label>Country</label>
            <input
              type="text"
              placeholder="United States"
              formControlName="country"
              [class.error]="form.controls.country.invalid && submitted"
            />
          </div>
          <span class="category-label">Payment details</span>
          <div class="field half-width">
            <label>Payment Method</label>
          </div>
          <app-radio-group
            [value]="form.value.paymentMethod ?? ''"
            [items]="[
              { name: 'payment', label: 'e-Money', value: 'emoney' },
              { name: 'payment', label: 'Cash on Delivery', value: 'cash' }
            ]"
            (optionChange)="updatePaymentType($event)"
          />
          <div
            class="field half-width"
            *ngIf="form.value.paymentMethod !== 'cash'"
          >
            <label>e-Money Number</label>
            <input
              type="text"
              placeholder="238521993"
              formControlName="eMoneyNumber"
              [class.error]="form.controls.eMoneyNumber.invalid && submitted"
            />
          </div>
          <div
            class="field half-width"
            *ngIf="form.value.paymentMethod !== 'cash'"
          >
            <label>e-Money PIN</label>
            <input
              type="text"
              placeholder="6891"
              formControlName="eMoneyPin"
              [class.error]="form.controls.eMoneyPin.invalid && submitted"
            />
          </div>
        </form>

        <div class="summary">
          <h6>Summary</h6>
          <p class="empty-cart" *ngIf="!cart.length">
            Your cart is currently empty
          </p>
          <ng-container *ngIf="cart.length">
            <div class="summary-product" *ngFor="let product of cart">
              <img
                src="assets/{{
                  product.item
                }}/desktop/image-category-page-preview.jpg"
              />
              <div class="name-and-price">
                <span class="product-name">{{
                  getProduct(product.item)?.name
                }}</span>
                <span class="product-price">{{
                  getProduct(product.item)?.price | currency
                }}</span>
              </div>
              <span class="product-quantity">x {{ product.quantity }}</span>
            </div>
          </ng-container>
          <div class="summary-info" *ngIf="cart.length">
            <div class="info-group">
              <span class="summary-label">Total</span>
              <span class="amount">{{ cartPrice | currency }}</span>
            </div>
            <div class="info-group">
              <span class="summary-label">Shipping</span>
              <span class="amount">$50</span>
            </div>
            <div class="info-group">
              <span class="summary-label">Vat (Included)</span>
              <span class="amount">$1,079</span>
            </div>

            <div class="info-group grand-total">
              <span class="summary-label">Grand Total</span>
              <span class="amount">{{ cartPrice + 50 + 1079 | currency }}</span>
            </div>
            <app-button
              type="primary"
              cssClass="checkout-button"
              [link]="null"
              (click)="submitForm()"
              >Continue & Pay</app-button
            >
          </div>
        </div>
      </div>
    </div>
    <dialog>
      <img src="assets/checkout/icon-order-confirmation.svg" />
      <h3>Thank you for your order</h3>
      <p>You will receive an email confirmation shortly.</p>
      <div class="d-flex align-items-center confirmation">
        <div
          class="d-flex align-items-center confirmation-items justify-content-center half-width"
        >
          <div
            class="item-details d-flex justify-content-between align-items-center"
          >
            <img
              src="assets/product-xx59-headphones/desktop/image-category-page-preview.jpg"
            />
            <div>
              <p class="name">XX99 MK II</p>
              <p class="price">$ 2,999</p>
            </div>
            <span class="quantity">x1</span>
          </div>
          <hr class="full-width" />
          <p class="full-width">and 2 other item(s)</p>
        </div>

        <div class="total half-width">
          <h6>GRAND TOTAL</h6>
          <p>$ 5,446</p>
        </div>
      </div>
      <app-button cssClass="checkout-button" type="primary"
        >Back to home</app-button
      >
    </dialog> `,
  styleUrls: ['checkout.component.scss'],
})
export class CheckoutComponent {
  form = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    phoneNumber: new FormControl('', Validators.required),
    address: new FormControl('', Validators.required),
    zipCode: new FormControl('', Validators.required),
    city: new FormControl('', Validators.required),
    country: new FormControl('', Validators.required),
    paymentMethod: new FormControl('emoney'),
    eMoneyNumber: new FormControl(''),
    eMoneyPin: new FormControl(''),
  });
  submitted = false;
  cart = this.productService.cart;
  cartPrice = this.cart.reduce((partialSum, a) => {
    const product = this.getProduct(a.item);
    return partialSum + product.price * a.quantity;
  }, 0);
  constructor(private productService: ProductService) {}

  openDialog() {
    const dialog = document.querySelector('dialog');
    dialog?.showModal();
  }
  submitForm() {
    this.submitted = true;
    this.form.updateValueAndValidity();

    if (this.form.valid) {
      this.openDialog();
    }
  }

  getProduct(imagePath: string) {
    return this.productService.products.filter(
      (p) => p.imagePath === imagePath
    )[0];
  }

  updatePaymentType(option: string) {
    this.form.controls.paymentMethod.setValue(option);
  }
}
