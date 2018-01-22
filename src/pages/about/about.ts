import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Slides ,LoadingController, Loading,  AlertController  } from 'ionic-angular';
import { ViewChild } from '@angular/core';
//pages
import { TabsPage } from '../tabs/tabs';
/**
 * Generated class for the AboutPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-about',
  templateUrl: 'about.html',
})
export class AboutPage {
  @ViewChild(Slides) slides :Slides;
  public loading:Loading;

  constructor(public navCtrl: NavController, public navParams: NavParams,  public alertCtrl: AlertController,
    public loadingCtrl: LoadingController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AboutPage');
  }

    SlideChanged(){
   
      let currentIndex = this.slides.getActiveIndex();
   
       // console.log('current index', currentIndex);
   
       if (currentIndex == 2){
   
            this.presentLoading();
   
            this.goToContainPage();
   
        }
 
    }


  goToContainPage(){
    
      this.navCtrl.setRoot(TabsPage);
  
    }

    goToSlide(){
      this.slides.startAutoplay();
    }

    presentLoading() {
      let loader = this.loadingCtrl.create({
        dismissOnPageChange: true,
        content: "Veuillez Patienter...",
        duration: 3000
      });
      loader.present();
    }

}
