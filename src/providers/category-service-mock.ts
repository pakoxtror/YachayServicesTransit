import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AlertController,LoadingController } from 'ionic-angular';
let url = 'http://192.168.88.61:3000'

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
  }

  getTransitProducts(id_user :string){
    this.loading= this.loadingController.create({
      content : 'Cargando..'
      //duration : 3000
    });
      this.loading.present();
      return new Promise(resolve => {
        this.http.get(url + '/api/v1/transit/'+id_user).subscribe(
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
  }


  getCategoryProducts(id_category : string){
    this.loading= this.loadingController.create({
      content : 'Cargando..'
      //duration : 3000
    });
      this.loading.present();
      return new Promise(resolve => {
        this.http.get(url + '/api/v1/category/'+id_category).subscribe(
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
  }

  getAllProducts(){
    this.loading= this.loadingController.create({
      content : 'Cargando..'
      //duration : 3000
    });
      this.loading.present();
      return new Promise(resolve => {
        this.http.get(url + '/api/v1/todo').subscribe(
          data=>{
            resolve(data)
            this.loading.dismiss();
          },err =>{
            console.log(err);
            if(!err.ok){
              this.loading.dismiss();
              this.showAlert();
            }
          }
        )
      })
  }

  getVendedorProducts(id_user : string){
    this.loading= this.loadingController.create({
      content : 'Cargando..'
      //duration : 3000
    });
      this.loading.present();
      return new Promise(resolve => {
        this.http.get(url + '/api/v1/vendedor/'+id_user).subscribe(
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
  }

  getListaVendedorProducts(id_user : string,id_prod : string){
    this.loading= this.loadingController.create({
      content : 'Cargando..'
      //duration : 3000
    });
      this.loading.present();
      return new Promise(resolve => {
        this.http.get(url + '/api/v1/vendedor/lista/'+id_user+'/'+id_prod).subscribe(
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
  }

  updateCart(result){
    this.loading= this.loadingController.create({
      content : 'Cargando..'
      //duration : 3000
    });
      this.loading.present();
    return new Promise(resolve => {
      this.http.post(url + '/api/v1/g_carrito',result).subscribe(
        data=>{
          resolve(data)
          this.loading.dismiss();
        },err =>{
          console.log(err);
          if(!err.ok){
            this.showAlert();
            this.loading.dismiss();
          }
        }
      )
    })
}
deleteCart(result){
  this.loading= this.loadingController.create({
    content : 'Cargando..'
    //duration : 3000
  });
    this.loading.present();
  return new Promise(resolve => {
    this.http.post(url + '/api/v1/b_carrito',result).subscribe(
      data=>{
        resolve(data);
        this.loading.dismiss();
      },err =>{
        console.log(err);
        if(!err.ok){
          this.showAlert();
          this.loading.dismiss();
        }
      }
    )
  })
}
order(result, direction){
  this.loading= this.loadingController.create({
    content : 'Cargando..'
    //duration : 3000
  });
    this.loading.present();
  return new Promise(resolve => {
    this.http.post(url + '/api/v1/order/'+direction,result).subscribe(
      data=>{
        resolve(data)
        this.loading.dismiss();
      },err =>{
        console.log(err);
        if(!err.ok){
          this.showAlert();
          this.loading.dismiss();
        }
      }
    )
  })
}
register(result){
  this.loading= this.loadingController.create({
    content : 'Verificando..',
  });
    this.loading.present();
  return new Promise(resolve => {
    this.http.post(url + '/api/v1/r',result).subscribe(
      data=>{
        resolve(data)
        this.loading.dismiss();
      },err =>{
        console.log(err);
        if(!err.ok){
          this.showAlert();
          this.loading.dismiss();
        }
      }
    )
  })
}

addproduct(result){
  this.loading= this.loadingController.create({
    content : 'Publicando..',
  });
    this.loading.present();
  return new Promise(resolve => {
    this.http.post(url + '/api/v1/product',result).subscribe(
      data=>{
        resolve(data)
        this.loading.dismiss();
      },err =>{
        console.log(err);
        if(!err.ok){
          this.showAlert();
          this.loading.dismiss();
        }
      }
    )
  })
}
getStock(id_product: number){

  return new Promise(resolve => {
    this.http.get(url+'/api/v1/stock/'+id_product.toString()).subscribe(
      data=>{
        resolve(data)
        console.log(data);
      },err =>{
        console.log(err);
        if(!err.ok){
          this.showAlert();
        }
      }
    )
  })
}

login(values) {
  this.loading= this.loadingController.create({
    content : 'Verificando..',
    duration : 5000
  });
    this.loading.present();
  return new Promise(resolve => {
    this.http.get(url+'/api/v1/login/',{params:values}).subscribe(
      data=>{
        resolve(data)

        console.log(data);
        this.loading.dismiss();
      },err =>{
        console.log(err);
        if(!err.ok){
          console.log("error");
          this.loading.dismiss();
          this.showAlert();
        }
      }
    )
  })

}
  showAlert() {
    let alert = this.alertCtrl.create({
      title: 'Fallo al conectar con el servidor',
      subTitle: 'Revisa tu coneccion a internet',
      buttons: ['OK']
    });
    alert.present();
  }
}