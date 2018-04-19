import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import {CategoryService} from '../../providers/category-service-mock';

@Component({
  selector: 'page-category',
  templateUrl: 'category.html',
})
export class CategoryPage {

  categories: any[] = [];

  constructor(
    public navCtrl: NavController,
    public categoryService: CategoryService
  ) {}

  ionViewDidLoad(){
    this.categoryService.getUsers()
    .subscribe(
      (data) => { // Success
        this.categories = data['0'];
      },
      (error) =>{
        console.error(error);
      }
    )
  }
}
