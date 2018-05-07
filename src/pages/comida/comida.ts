import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ToastController } from 'ionic-angular';
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
  id_user : number;
  constructor(public toastCtrl : ToastController,public navCtrl: NavController, public navParams: NavParams,public categoryService:CategoryService) {
    this.id_user = this.navParams.get('id_user');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ComidaPage');
    this.categoryService.getComida()
    .then(
      (data) => { // Success
        this.comidaList=data;
        console.log(this.comidaList);
      },
      (error) =>{
        console.error(error);
      }
    )
  }
  gotoCart(id_product:number){
    this.categoryService.sendCart(this.id_user,id_product)
    .then(
      (data)=>{
        this.presentToastExito();
        console.log(data);
      },
      (error) =>{
        this.presentToastFallido();
      }
    )
  }
  presentToastExito() {
    let toast = this.toastCtrl.create({
      message: 'Exito',
      duration: 3000
    });
    toast.present();
  }
  presentToastFallido() {
    let toast = this.toastCtrl.create({
      message: 'Fail',
      duration: 3000
    });
    toast.present();
  }
}
