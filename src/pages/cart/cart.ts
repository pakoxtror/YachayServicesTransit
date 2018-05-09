import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CategoryService } from '../../providers/category-service-mock'
import { AlertController,LoadingController, ToastController } from 'ionic-angular';
import {ViewController} from 'ionic-angular';

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

    loading: any;
    aumento: number;
    id_user : number;
    public carritoList : any;
    constructor(public toastCtrl: ToastController, private alertCtrl: AlertController, private viewCtrl: ViewController, public navCtrl: NavController, public navParams: NavParams,public categoryService:CategoryService, private loadingController: LoadingController) {
    this.id_user = this.navParams.get('id_user');
    this.aumento = 0;
    }
    ionViewDidEnter() {
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

    add(i){
      this.carritoList[i].quantity= this.carritoList[i].quantity+ 1;
    }

    remove(i){
      if (this.carritoList[i].quantity- 1 < 1){
        this.carritoList[i].quantity= this.carritoList[i].quantity;
      }
      else{
        this.carritoList[i].quantity= this.carritoList[i].quantity- 1;
      }
    }

    cant (i: number){
      return this.carritoList[i].quantity;
    }

    toTitleCase(string){
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  
    save(){
      this.loading= this.loadingController.create({
        content : 'Cargando..'
        //duration : 3000
      });
        this.loading.present();
      var vacio
        this.categoryService.updateCart(this.carritoList)
        .then(
          (data) => { // Success
            vacio=data;
            this.loading.dismiss();
            this.presentToastrc();
          },
          (error) =>{
            console.error(error);
            this.loading.dismiss();
            this.presentToastr();
          }
        )
    }
    delete(i){
      this.loading= this.loadingController.create({
        content : 'Cargando..'
        //duration : 3000
      });
        this.loading.present();
      var vacio
        this.categoryService.deleteCart(this.carritoList[i])
        .then(
          (data) => { // Success
            vacio=data;
            this.loading.dismiss();
          },
          (error) =>{
            console.error(error);
            this.loading.dismiss();
          }
        )
        this.carritoList.splice(i,1);
    }
    presentPrompt() {
      let alert = this.alertCtrl.create({
        title: 'Direccion de Entrega',
        inputs: [
          {
            name: 'Dirección',
            placeholder: 'Dirección'
          }
        ],
        buttons: [
          {
            text: 'Cancelar',
            role: 'cancelar',
            handler: data => {
              console.log('Cancel clicked');
            }
          },
          {
            text: 'Confirmar',
            handler: data => {
              if (this.confirmStock()){
                console.log('login clicked');
                this.loading= this.loadingController.create({
                  content : 'Cargando..'
                  //duration : 3000
                });
                  this.loading.present();
                var vacio
                  this.categoryService.order(this.carritoList,data.Dirección)
                  .then(
                    (data) => { // Success
                      vacio=data;
                      this.loading.dismiss();
                      this.clear();
                      this.presentToastoc()
                    },
                    (error) =>{
                      console.error(error);
                      this.loading.dismiss();
                      this.presentToastor()
                    }
                  )}
                  else{

                  }
            }
          }
        ]
      });
      alert.present();
    }

    confirmStock() {
      var str: string = '';
      var isReady: boolean = true;
      console.log(Object.keys(this.carritoList).length);
      for (var i = 0; i < Object.keys(this.carritoList).length; i++){
        if (this.carritoList[i].stock < this.carritoList[i].quantity){
          isReady = false;
          str = str + '*'+' '+ this.toTitleCase(this.carritoList[i].name)+'\n' ;
        }
      }
      if (isReady){
       return isReady;
      }
      else{
        this.showAlert(str);
        return isReady;
      }
    }
 
    showAlert(str: string) {
        let alert = this.alertCtrl.create({
          subTitle: 'Los siguientes productos exceden el stock disponible: ',
          message: str,
          buttons: ['OK']
        });
        alert.present();
      }

    clear(){
      this.carritoList.splice(0,Object.keys(this.carritoList).length);
    }
    presentToastr() {
      let toast = this.toastCtrl.create({
        message: 'Error al guardar carrito',
        duration: 2000
      });
      toast.present();
    }
    presentToastrc() {
      let toast = this.toastCtrl.create({
        message: 'Guardado Correctamente',
        duration: 2000
      });
      toast.present();
    }

    presentToastor() {
      let toast = this.toastCtrl.create({
        message: 'Error al confirmar compra',
        duration: 2000
      });
      toast.present();
    }
    presentToastoc() {
      let toast = this.toastCtrl.create({
        message: 'Haz realizado tu compra!!',
        duration: 2000
      });
      toast.present();
    }
    spliceDate(str :string){
      return str.substring(0,10);
    }

    spliceDeliveryDate(str :string){
      return str.substring(0,10)+'   '+str.substring(11,16);
    }
}

  