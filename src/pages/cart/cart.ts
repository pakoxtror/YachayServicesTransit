import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the CartPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-cart',
  templateUrl: 'cart.html',
})
export class CartPage {
  id_user : number;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.id_user = this.navParams.get('id_user');
    console.log(this.id_user);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CartPage');
  }

}
