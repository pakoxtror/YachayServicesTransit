import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { WalkthroughPage } from '../pages/walkthrough/walkthrough'
import { AuthPage } from '../pages/auth/auth'

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    WalkthroughPage,
    HomePage,
    AuthPage,
    //CategoryPage,
    //ItemPage,
    //CartPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    WalkthroughPage,
    HomePage,
    AuthPage,
    //CategoryPage,
    //ItemPage,
    //CartPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
