import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CartPage } from '../cart/cart';
import { CategoryService } from '../../providers/category-service-mock'
/**
 * Generated class for the ComidaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-comida',
  templateUrl: 'comida.html',
})
export class ComidaPage {
  public comidaList : any;
  constructor(public navCtrl: NavController, public navParams: NavParams,public categoryService:CategoryService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ComidaPage');
    this.categoryService.getComida()
    .subscribe(
      (data) => { // Success
        this.comidaList=data;
        console.log(this.comidaList);
      },
      (error) =>{
        console.error(error);
      }
    )
  }
  gotoCart(){
    this.navCtrl.push(CartPage);
  }
}
