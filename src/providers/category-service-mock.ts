import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AlertController,LoadingController } from 'ionic-angular';

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
    return this.http.get('http://192.168.88.61:3000/api/v1/num_products');
  }
  getComida(){
    this.loading= this.loadingController.create({
      content : 'Cargando..'
      //duration : 3000
    });
      this.loading.present();
      return new Promise(resolve => {
        this.http.get('http://192.168.88.61:3000/api/v1/comida').subscribe(
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
    //return this.http.get('http://192.168.88.61:3000/api/v1/comida');
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
