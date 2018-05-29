import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ProductPage } from './productItem';

@Component({
  selector: 'page-products',
  templateUrl: 'index.html'
})
export class ProductsPage {

  constructor(public navCtrl: NavController) {
  }

  onNewProduct(){
    this.navCtrl.push(ProductPage);
  }

}
