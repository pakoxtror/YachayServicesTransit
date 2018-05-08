import {Component, OnInit} from "@angular/core";
import {FormGroup, Validators, FormBuilder} from '@angular/forms';
import {NavController, AlertController, ToastController, MenuController, LoadingController} from "ionic-angular";
import { Http} from '@angular/http';
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
  loading: any;
  auth: string = "login";
  todo:any = {};
  public respuesta:any = {};
  public id_user: number ;

  constructor(private loadingController: LoadingController,public authprovider: AuthProvider, private _fb: FormBuilder, public nav: NavController, public forgotCtrl: AlertController, public menu: MenuController, public toastCtrl: ToastController,  public http: Http) {
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
    this.loading= this.loadingController.create({
      content : 'Verificando..',
      duration : 5000
    });
      this.loading.present();
    this.authprovider.login(this.onLoginForm.value).then((result) => {
      this.respuesta = result;
      if (this.respuesta.length != 1){
        this.presentToast() 
        console.log(this.respuesta);
        console.log(this.respuesta.length);
        this.loading.dismiss();
        
      } else{
        console.log(this.respuesta);
        this.id_user = this.respuesta.id_user;
        this.nav.setRoot(CategoryPage,{id_user: this.id_user});
        this.loading.dismiss();
      }
    }, (err) => {
      console.log("error no recibi nada");
      
        })

        
        
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
