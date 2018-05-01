import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { Http } from '@angular/http';

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
  todo:any = {}
  constructor(public navCtrl: NavController, public http: Http) {
    this.todo.name = '';
    this.todo.description = '';
    this.todo.price= '';
    this.todo.stock = '';
    this.todo.response = '';

  }
  
  logForm() {
    console.log(this.todo)
  }

  postProduct() {
    var link = 'http://127.0.0.1:3000/api/v1/todos';
        this.http.post(link, this.todo)
        .subscribe(data => {
        	this.todo.response = data["_body"]; 
        }, error => {
            console.log("Oooops!");
        });
  }
}

  
