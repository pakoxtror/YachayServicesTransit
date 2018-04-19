import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class CategoryService {

  constructor(
    private http: HttpClient
  ) {}

  getUsers() {
    return this.http.get('http://127.0.0.1:8000/product/');
  }
}
