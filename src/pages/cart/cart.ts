import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CategoryService } from '../../providers/category-service-mock'

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
    public carritoList : any;
    constructor(public navCtrl: NavController, public navParams: NavParams,public categoryService:CategoryService) {
    this.id_user = this.navParams.get('id_user');
    }
  
    ionViewDidLoad() {
      console.log('ionViewDidLoad cart-Page');
      this.categoryService.getCarrito(this.id_user)
      .then(
        (data) => { // Success
          this.carritoList=data;
          console.log(this.carritoList);
        },
        (error) =>{
          console.error(error);
        }
      )
    }
  }
  