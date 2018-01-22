import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service'; 
// from generated page
import {HomePage} from '../home/home';
import {ListPage} from '../list/list';
import {AuthentificationPage} from '../authentification/authentification'
import {RecentPage} from '../recent/recent';

/**
 * Generated class for the TabsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {

  private BADGE_URL : string = "http://localhost/scolarys/Models/datalist/alert.php";
  public messageCount : any = [];


  tab1Root: any =HomePage;
  tab2Root: any = RecentPage;
  tab3Root: any = AuthentificationPage;


  constructor(public navCtrl: NavController, public navParams: NavParams ,private http:Http) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TabsPage');
   
  }
  ngOnInit() {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    
    // this.badgeAlert();
  }

/* 
  badgeAlert(){

    this.http.get(this.BADGE_URL)
    .map(res => res.json())
    .subscribe(data =>
    {
      if( data.Badge !=0){

        this.messageCount = data.Badge;
      }
      else{

        this.messageCount;
      }
       
    });
  }
 */
}
