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
  public numCat0 : number;
  public numCat1 : number;
  public numCat2 : number;
  public numCat3 : number;
  public numCat4 : number;
  proptype: string;
  constructor(
    public navCtrl: NavController,
    public categoryService: CategoryService
  ) {}

  ionViewDidLoad(){
    this.categoryService.getNumCat()
    .subscribe(
      (data) => { // Success
        this.numCat0 = data[0].num_prod;
        this.numCat1 = data[1].num_prod;
        this.numCat2 = data[2].num_prod;
        this.numCat3 = data[3].num_prod;
        this.numCat4 = data[4].num_prod;
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
  openCategoryPage(proptype) {
    proptype = proptype + 'Page';
  	this.navCtrl.push(proptype);
  }
}
