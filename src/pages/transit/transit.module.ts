import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TransitPage } from './transit';

@NgModule({
  declarations: [
    TransitPage,
  ],
  imports: [
    IonicPageModule.forChild(TransitPage),
  ],
})
export class TransitPageModule {}
