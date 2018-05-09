import { Component } from '@angular/core';
import { Http } from '@angular/http';
import {FormGroup, Validators, FormBuilder} from '@angular/forms';
import {NavController, AlertController, ToastController, MenuController, NavParams, LoadingController} from "ionic-angular";
import { CategoryService } from '../../providers/category-service-mock'

/**
 * Generated class for the AddproductPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-addproduct',
  templateUrl: 'addproduct.html',
})
export class AddproductPage {
  loading : any;
  id_user : number;
  numberSettings: any = {
      theme: 'ios',
      display: 'bottom',
      layout: 'fixed',
      step: 1,
      min: 10,
      max: 150,
      width: 150
  };
  todo:any = {}
  public onAddForm : FormGroup;

  constructor(private loadingController: LoadingController, public categoryService: CategoryService, private _fb: FormBuilder, public nav: NavController, public navParams: NavParams, public forgotCtrl: AlertController, public menu: MenuController, public toastCtrl: ToastController,  public http: Http) {
    this.id_user = this.navParams.get('id_user');
    console.log(this.id_user);
  }

  ngOnInit() {
    this.onAddForm = this._fb.group({
      name: ['', Validators.compose([
        Validators.required
      ])],
      description: ['', Validators.compose([
        Validators.required
      ])],
      price: ['', Validators.compose([
        Validators.required
      ])],
      stock: [ , Validators.compose([
        Validators.required
      ])],
      delivery_date: ['', Validators.compose([
        Validators.required
      ])],
      start_date: ['', Validators.compose([
        Validators.required
      ])],
      category: ['', Validators.compose([
        Validators.required
      ])],
      id_user: [this.id_user]
    });
  }
 
  postProduct() {
    this.loading= this.loadingController.create({
      content : 'Publicando..',
    });
      this.loading.present();
    this.categoryService.addproduct(this.onAddForm.value).then((result) => {
      this.loading.dismiss();
      this.presentToastrc();
    }, (err) => {
      console.log("error no recibi nada");
      this.presentToastr()
      this.loading.dismiss();
        })
        
  }
  presentToastr() {
    let toast = this.toastCtrl.create({
      message: 'Error al subir producto',
      duration: 3000
    });
    toast.present();
  }
  presentToastrc() {
    let toast = this.toastCtrl.create({
      message: 'Registrado Correctamente',
      duration: 2000
    });
    toast.present();
  }
}
