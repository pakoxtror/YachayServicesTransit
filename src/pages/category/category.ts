import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {CategoryService} from '../../providers/category-service-mock';

@Component({
  selector: 'page-category',
  templateUrl: 'category.html',
})
export class CategoryPage {

  categories: any = [];

  constructor(
    public navCtrl: NavController,
    public categoryService: CategoryService
  ) {}

  ionViewDidLoad(){
    this.categoryService.getUsers()
    .subscribe(
      (data) => { // Success
        this.categories = data;
      },
      (error) =>{
        console.error(error);
      }
    )
  }
}
