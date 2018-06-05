import { Component, OnInit } from '@angular/core';
import {FormGroup, Validators, FormBuilder} from '@angular/forms';
import {IonicPage, NavController, NavParams, AlertController, ToastController, MenuController, LoadingController} from "ionic-angular";
import { Http} from '@angular/http';
import { CategoryService } from '../../providers/category-service-mock'
import moment from 'moment';
/**
 * Generated class for the TripPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-trip',
  templateUrl: 'trip.html',
})
export class TripPage {
  myDate: String = moment().format();
  public onSolicitarForm: FormGroup;
  public onOfrecerForm: FormGroup;
  loading: any;
  viaje: string = "solicitar";
  todo:any = {};
  numberSettings: any = {
    theme: 'ios',
    display: 'bottom',
    layout: 'fixed',
    step: 1,
    min: 10,
    max: 150,
    width: 150
};
  public respuesta:any = {};
  public id_user: number ;
  constructor(private loadingController: LoadingController, public categoryService: CategoryService, private _fb: FormBuilder, public nav: NavController, public navParams: NavParams, public forgotCtrl: AlertController, public menu: MenuController, public toastCtrl: ToastController,  public http: Http) {
  this.id_user = this.navParams.get('id_user');
  console.log(this.id_user);
}
ngOnInit() {
  console.log(this.myDate);
  this.onSolicitarForm = this._fb.group({
    origen: ['', Validators.compose([
      Validators.required
    ])],
    destino: ['', Validators.compose([
      Validators.required
    ])],
    fecha_hora: ['', Validators.compose([
      Validators.required
    ])],
    precio_unitario: ['', Validators.compose([
      Validators.required
    ])],
    puestos: ['', Validators.compose([
      Validators.required
    ])],
    id_user: ['', Validators.compose([
      Validators.required
    ])]
  }),

  this.onOfrecerForm = this._fb.group({
    origen: ['', Validators.compose([
      Validators.required
    ])],
    destino: ['', Validators.compose([
      Validators.required
    ])],
    fecha_hora: ['', Validators.compose([
      Validators.required
    ])],
    precio_unitario: ['', Validators.compose([
      Validators.required
    ])],
    puestos: ['', Validators.compose([
      Validators.required
    ])],
    id_user: ['', Validators.compose([
      Validators.required
    ])]
  });
}

  ionViewDidLoad() {
    console.log('ionViewDidLoad TripPage');
  }

}
