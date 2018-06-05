import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { TripPage } from '../trip/trip';
import { CartPage } from '../cart/cart';
import { AddproductPage} from '../addproduct/addproduct';
import { InformationPage} from '../information/information';
import { CategoryService } from '../../providers/category-service-mock'

/**
 * Generated class for the ViajesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-viajes',
  templateUrl: 'viajes.html',
})
export class ViajesPage {
  public solList: any;
  public oferList: any;
  public id_user: number;
  public oferta: any;
  public solicitud: any;
  i: any;
  j: any;
  constructor(public toastCtrl : ToastController,public navCtrl: NavController, public navParams: NavParams, public categoryService:CategoryService) {
    this.id_user = this.navParams.get('id_user');
}
toTitleCase(str :string){
  return str.charAt(0).toUpperCase() + str.slice(1);
}

spliceDate(str :string){
  return str.substring(0,10);
}

spliceDeliveryDate(str :string){
  return str.substring(0,10)+'   '+str.substring(11,16);
}
  ionViewDidLoad() {
    console.log('ionViewDidLoad ViajesPage');
    this.categoryService.getOfertas()
    .then(
      (data)=> {//Success
        this.oferList=data;
        console.log(this.oferList);
    },
    (error) =>{
      console.error(error);
    }
    )
    this.categoryService.getSolicitudes()
    .then(
      (data2)=> {//Success
        this.solList =data2;
        this.solList.id_user = this.id_user;
        console.log(this.solList);
        console.log(this.solList.id_user);
    },
    (error) =>{
      console.error(error);
    }
    )
  }
  aceptarViaje(j){
    this.solList[j].id_user = this.id_user;
    this.solList[j].id_viaje = 1;
    console.log(this.solList[j].id_viaje);
    console.log(this.solList[j]);
    this.categoryService.aceptViaje(this.solList[j]).then((result) => {
      this.presentToastrc();
    }, (err) => {
      console.log("error no recibi nada");
      this.presentToastr()
        })
  }
  openTripPage(){
    this.navCtrl.push(TripPage,this.id_user);
  }
  openCartPage() {
    this.navCtrl.push(CartPage,this.id_user);
  }
  openAddProductPage() {
    this.navCtrl.push(AddproductPage,this.id_user);
  }
  openInformationPage() {
    this.navCtrl.push(InformationPage,this.id_user);
  }
  presentToastr() {
    let toast = this.toastCtrl.create({
      message: 'Error al Aceptar el Viaje',
      duration: 3000
    });
    toast.present();
  }
  presentToastrc() {
    let toast = this.toastCtrl.create({
      message: 'Viaje Aceptado',
      duration: 2000
    });
    toast.present();
  }
}
