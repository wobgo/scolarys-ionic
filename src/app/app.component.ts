
import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Http, HttpModule } from '@angular/http';
import 'rxjs/Rx'; 
import { Storage } from '@ionic/storage';
//pages
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { TabsPage } from '../pages/tabs/tabs';
import {AuthentificationPage} from '../pages/authentification/authentification';
import {NewregisPage} from '../pages/newregis/newregis';
import {SettingsPage} from '../pages/settings/settings';
import {RecentPage} from '../pages/recent/recent';
//import


@Component({
  templateUrl: 'app.html'
})
export class MyApp {

  @ViewChild(Nav) nav: Nav;

  private rootPage: any ; //HomePage
  private logged : any; 
  
  pages: Array<{title: string, icon: string,color:string ,component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen,private storage: Storage) {
    this.initializeApp();

  /**/ this.storage.get('age').then((val) => {
    
       if (val!= null){

          this.rootPage = TabsPage;
          
       }else
       
       {

          this.rootPage  = AuthentificationPage;
          

       }
     // console.log('Your age is', val);
    });
 

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home',icon:'home',color:'primary', component: TabsPage },
      { title: 'Aide',icon:'md-help-circle',color:'', component: AuthentificationPage },
      { title: 'Parametres',icon:'md-settings',color:'', component: SettingsPage }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }


  IsLogged(){
  
   /*  */ this.storage.remove('age').then((val) => {
      console.log('Your age is', val);
      //this.rootPage  = AuthentificationPage;
    });;
    
  }
 

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
