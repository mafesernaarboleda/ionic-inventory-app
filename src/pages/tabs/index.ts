import { Component } from '@angular/core';

import { SalesPage } from '../sales';
import { PaymentsPage } from '../payments';
import { ProductsPage } from '../products';

@Component({
  templateUrl: 'index.html'
})
export class TabsPage {

  products = ProductsPage;
  sales = SalesPage;
  payments = PaymentsPage;

  constructor() {

  }
}
