import { Component } from '@angular/core';
import { Http } from '@angular/http';
import {FormGroup, Validators, FormBuilder} from '@angular/forms';
import {NavController, AlertController, ToastController, MenuController, NavParams} from "ionic-angular";


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

  constructor(private _fb: FormBuilder, public nav: NavController, public navParams: NavParams, public forgotCtrl: AlertController, public menu: MenuController, public toastCtrl: ToastController,  public http: Http) {
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
    console.log(this.id_user);
    console.log(this.onAddForm.value);
    var link = 'http://127.0.0.1:3000/api/v1/product';
        this.http.post(link, this.onAddForm.value)
        .subscribe(data => {
        	this.todo.response = data["_body"];
        }, error => {
            console.log("Oooops!");
        });
  }
}
