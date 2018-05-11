import {Component, OnInit} from "@angular/core";
import {FormGroup, Validators, FormBuilder} from '@angular/forms';
import {NavController, AlertController, ToastController, MenuController, LoadingController} from "ionic-angular";
import { Http} from '@angular/http';
import {CategoryPage} from "../category/category";
import {AuthProvider} from '../../providers/auth/auth';
import { CategoryService } from '../../providers/category-service-mock'

// import {RegisterPage} from "../register/register";

@Component({
  selector: 'page-auth',
  templateUrl: 'auth.html'
})
export class AuthPage implements OnInit {
  public onLoginForm: FormGroup;
  public onRegisterForm: FormGroup;
  loading: any;
  auth: string = "login";
  todo:any = {};
  public respuesta:any = {};
  public id_user: number ;

  constructor(public categoryService:CategoryService, private loadingController: LoadingController,public authprovider: AuthProvider, private _fb: FormBuilder, public nav: NavController, public forgotCtrl: AlertController, public menu: MenuController, public toastCtrl: ToastController,  public http: Http) {
    this.menu.swipeEnable(false);
  }

  ngOnInit() {
    this.onLoginForm = this._fb.group({
      email: ['', Validators.compose([
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
      lastname: ['', Validators.compose([
        Validators.required
      ])],
      email: ['', Validators.compose([
        Validators.required
      ])],
      password: ['', Validators.compose([
        Validators.required
      ])],
      cellphone: ['', Validators.compose([
        Validators.required
      ])]
    });
  }

  // login and go to home page
  login() {
    this.categoryService.login(this.onLoginForm.value).then((result) => {
      this.respuesta = result;
      if (this.respuesta.length != 1){
        this.presentToast() 
        console.log(this.respuesta);
        console.log(this.respuesta.length);
        
      } else{
        console.log('esto');
        console.log(this.respuesta );
        console.log(this.respuesta[0].id_user);
        this.id_user = this.respuesta[0].id_user;
        this.nav.setRoot(CategoryPage,{id_user: this.id_user});
      }
    }, (err) => {
      console.log("error no recibi nada");
  
        })    
  }


  register() {
    this.categoryService.register(this.onRegisterForm.value).then((result) => {
      this.presentToastrc();
    }, (err) => {
      console.log("error no recibi nada");
        })
        
  }

  presentToast() {
    let toast = this.toastCtrl.create({
      message: 'Autentificación fallida',
      duration: 3000
    });
    toast.present();
  }
  presentToastr() {
    let toast = this.toastCtrl.create({
      message: 'Error al Registrarte',
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
