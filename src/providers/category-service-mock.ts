import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class CategoryService {

  constructor(
    private http: HttpClient
  ) {}

  getNumCat() {
    return this.http.get('http://192.168.88.61:3000/api/v1/num_products');
  }
  getComida(){
    return this.http.get('http://192.168.88.61:3000/api/v1/comida');
  }
}
