import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductPageComponent } from './product-page/product-page.component';
import { ProductOverviewComponent } from './product-overview/product-overview.component';
import { CheckoutComponent } from './checkout/checkout.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'headphones',

    children: [
      {
        path: '',
        component: ProductPageComponent,
        data: {
          title: 'Headphones',
        },
      },
      { path: ':id', component: ProductOverviewComponent },
    ],
  },
  {
    path: 'speakers',
    children: [
      {
        path: '',
        component: ProductPageComponent,
        data: {
          title: 'Speakers',
        },
      },
      { path: ':id', component: ProductOverviewComponent },
    ],
  },
  {
    path: 'earphones',

    children: [
      {
        path: '',
        component: ProductPageComponent,
        data: {
          title: 'Earphones',
        },
      },
      { path: ':id', component: ProductOverviewComponent },
    ],
  },
  {
    path: 'checkout',
    component: CheckoutComponent,
  },
  { path: '**', redirectTo: 'home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
