import { Component, ViewChild } from '@angular/core';
import { Slides, NavController } from 'ionic-angular';

import {HomePage} from '../home/home';

@Component({
  selector: 'page-walkthrough',
  templateUrl: 'walkthrough.html',
})
export class WalkthroughPage {
	@ViewChild(Slides) slides: Slides;
  showSkip = true;
  dir: string = 'ltr';

  slideList: Array<any> = [
    {
      title: "What is <strong>Yachay</strong> Services?",
      description: "This app was made for all your needs in Yachay Tech!",
      image: "../../assets/imgs/logoy.png",
    },
    {
      title: "Why Yachay Services?",
      description: "To make buying and selling easier and faster!",
      image: "../../assets/imgs/logoy.png",
    },
    {
      title: "Your delicious dish is coming!",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque maximus, dui accumsan cursus lacinia, nisl risus.",
      image: "../../assets/imgs/logoy.png",
    }
    
  ];

  constructor(public navCtrl: NavController) {
  }

  onSlideNext() {
    this.slides.slideNext(300)
  }

	onSlidePrev() {
    this.slides.slidePrev(300)
  }

  onLastSlide() {
  	this.slides.slideTo(3, 300)
  }

  openHomePage() {
  	this.navCtrl.setRoot(HomePage);
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad WalkthroughPage');
  }

}
