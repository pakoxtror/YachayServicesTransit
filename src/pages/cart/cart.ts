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
    aumento: number;
    id_user : number;
    public carritoList : any;
    constructor(public navCtrl: NavController, public navParams: NavParams,public categoryService:CategoryService) {
    this.id_user = this.navParams.get('id_user');
    this.aumento = 0;
    }
  
    ionViewDidEnter() {
      console.log('ionViewDidLoad cart-Page');
      this.categoryService.getCarrito(this.id_user)
      .then(
        (data) => { // Success
          this.carritoList=data;
        },
        (error) =>{
          console.error(error);
        }
      )
    }

    add(i){
      this.carritoList[i].cantidad = this.carritoList[i].cantidad + 1;
    }

    remove(i){
      if (this.carritoList[i].cantidad - 1 < 0){
        this.carritoList[i].cantidad = this.carritoList[i].cantidad;
      }
      else{
        this.carritoList[i].cantidad = this.carritoList[i].cantidad - 1;
      }
    }

    cant (i: number){
      return this.carritoList[i].cantidad;
    }

    toTitleCase(string){
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  
}
  