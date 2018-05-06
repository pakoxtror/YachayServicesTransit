import {Component, OnInit} from "@angular/core";
import {FormGroup, Validators, FormBuilder} from '@angular/forms';
import {NavController, AlertController, ToastController, MenuController} from "ionic-angular";
import { Http, Response} from '@angular/http';
import {CategoryPage} from "../category/category";
import {AuthProvider} from '../../providers/auth/auth';
// import {RegisterPage} from "../register/register";

@Component({
  selector: 'page-auth',
  templateUrl: 'auth.html'
})
export class AuthPage implements OnInit {
  public onLoginForm: FormGroup;
  public onRegisterForm: FormGroup;

  auth: string = "login";
  todo:any = {};
  respuesta:any = {};

  constructor(public authprovider: AuthProvider, private _fb: FormBuilder, public nav: NavController, public forgotCtrl: AlertController, public menu: MenuController, public toastCtrl: ToastController,  public http: Http) {
    this.menu.swipeEnable(false);
  }

  ngOnInit() {
    this.onLoginForm = this._fb.group({
      user_name: ['', Validators.compose([
        Validators.required
      ])],
      password: ['', Validators.compose([
        Validators.required
      ])]
    });

    this.onRegisterForm = this._fb.group({
      name: ['', Validators.compose([
        Validators.required
      ])],
      email: ['', Validators.compose([
        Validators.required
      ])],
      password: ['', Validators.compose([
        Validators.required
      ])]
    });
  }

  // login and go to home page
  login() {
    this.authprovider.login(this.onLoginForm.value).then((result) => {
      this.respuesta = result;
    }, (err) => {
      console.log("error no recibi nada");
        })

        if (this.respuesta.length != 1){
          this.presentToast() 
        } else{
          this.nav.setRoot(CategoryPage);
        }
        
  }


  register() {
    console.log(this.onRegisterForm.value)
    var link = 'http://192.168.88.61:3000/api/v1/r';
        this.http.post(link, this.onRegisterForm.value)
        .subscribe(data => {
          this.todo = data["_body"];
        }, error => {
            console.log("Oooops!");
        });
  }

  presentToast() {
    let toast = this.toastCtrl.create({
      message: 'Autentificación fallida',
      duration: 3000
    });
    toast.present();
  }
}
