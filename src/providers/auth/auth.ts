import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
let apiURL = 'http://192.168.88.61:3000/api/v1/login'
/*
  Generated class for the AuthProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthProvider {

  constructor(public http: HttpClient) {
    console.log('Hello AuthProvider Provider');
  }
  login(values) {
    return new Promise((resolve, reject) => {
      this.http.post(apiURL, values)
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  
  }
}

