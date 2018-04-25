
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { WalkthroughPage } from '../pages/walkthrough/walkthrough';
import { AuthPage } from '../pages/auth/auth';
import { CategoryPage } from '../pages/category/category';
import {CategoryService} from '../providers/category-service-mock';
import { HttpClientModule } from '@angular/common/http';
import { CartPage } from '../pages/cart/cart';
import { AddproductPage} from '../pages/addproduct/addproduct';
import { InformationPage} from '../pages/information/information';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    WalkthroughPage,
    HomePage,
    AuthPage,
    AddproductPage,
    CategoryPage,
    InformationPage,
    CartPage,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    WalkthroughPage,
    HomePage,
    AuthPage,
    CategoryPage,
    AddproductPage,
    InformationPage,
    CartPage,
    //CategoryPage,
    //ItemPage,
    //CartPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    CategoryService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
