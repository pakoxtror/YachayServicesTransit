import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AlertController,LoadingController } from 'ionic-angular';
let url = 'http://127.0.0.1:3000'

@Injectable()
export class CategoryService {
  loading: any;
  duration : number;
  constructor(
    private http: HttpClient,
    public alertCtrl: AlertController,
    private loadingController: LoadingController
  ) {}

  getNumCat() {
    return this.http.get(url+'/api/v1/num_products');
  }
  getComida(){
    this.loading= this.loadingController.create({
      content : 'Cargando..'
      //duration : 3000
    });
      this.loading.present();
      return new Promise(resolve => {
        this.http.get(url + '/api/v1/comida').subscribe(
          data=>{
            resolve(data)
            this.loading.dismiss()
          },err =>{
            console.log(err);
            if(!err.ok){
              this.loading.dismiss();
              this.showAlert();
            }
          }
        )
      })
    //return this.http.get('url' + '/api/v1/comida');
  }
  getCarrito(id_user: number){
    this.loading= this.loadingController.create({
      content : 'Cargando..'
      //duration : 3000
    });
      this.loading.present();
      return new Promise(resolve => {
        this.http.get(url+'/api/v1/carrito/'+id_user.toString()).subscribe(
          data=>{
            resolve(data)
            this.loading.dismiss()
            console.log(data);
          },err =>{
            console.log(err);
            if(!err.ok){
              this.loading.dismiss();
              this.showAlert();
            }
          }
        )
      })
    //return this.http.get('url' + '/api/v1/comida');
  }
  sendCart(id_user: number,id_product : number){
    this.loading= this.loadingController.create({
      content : 'Cargando..'
      //duration : 3000
    });
      this.loading.present();
      return new Promise(resolve => {
        this.http.post(url+'/api/v1/send_carrito',{id_user:id_user,id_product:id_product}).subscribe(
          data=>{
            resolve(data)
            this.loading.dismiss()
            console.log(data);
          },err =>{
            console.log(err);
            if(!err.ok){
              this.loading.dismiss();
              this.showAlert();
            }
          }
        )
      })
    //return this.http.get('url' + '/api/v1/comida');
  }

  showAlert() {
    let alert = this.alertCtrl.create({
      title: 'No Internet!',
      subTitle: 'Please connect!',
      buttons: ['OK']
    });
    alert.present();
  }
}
