import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CategoryService } from '../../providers/category-service-mock';
import { CartPage } from '../cart/cart';
import { AddproductPage} from '../addproduct/addproduct';
import { InformationPage} from '../information/information';

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
  openCartPage() {
    this.navCtrl.push(CartPage);
  }
  openAddProductPage() {
    this.navCtrl.push(AddproductPage);
  }
  openInformationPage() {
    this.navCtrl.push(InformationPage);
  }
}
