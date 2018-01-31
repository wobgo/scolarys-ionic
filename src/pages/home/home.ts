import { Component } from '@angular/core';
import { NavController,NavParams } from 'ionic-angular';
import {RequestProvider} from '../../providers/request/request'
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

//////pages
import { AboutPage } from '../about/about';
import { InfoPage } from '../info/info';
import { TimelinePage } from '../timeline/timeline';
import { AddquestPage } from '../addquest/addquest';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public search =true;
  private SUBJECT_URL = "http://localhost/scolarys/Models/datalist/subject.php";
  public items : any = [];
  private  icons: string[];
  // selectedItem: any;


  public modalitems: Array<{title: string, note: string, icon: string}>;
  public json_data:any;

  constructor( public navCtrl: NavController, private http:Http, public navParams: NavParams) {
    this.http.get('assets/data/cours.json').map(res => res.json()).subscribe(data => {
               this.json_data = data;
               console.log("=====data===")
               console.log(data)
          });

  // If we navigated to this page, we will have an item available as a nav param
 // this.selectedItem = navParams.get('item');
this.subject();

       // Let's populate this page with some filler content for funzies
   this.icons = ['flask', 'wifi', 'beer', 'football'];

   this.modalitems = [];
   for (let i = 1; i < 4; i++) {
     this.modalitems.push({
       title: 'Item ' + i,
       note: 'This is item #' + i,
       icon: this.icons[Math.floor(Math.random() * this.icons.length)]
     });
   }


  }

  public searchChange(){

    this.search =! this.search;

  }

 ionViewDidLoad(){

   console.log('Hello HOME TS');


 }

subject(){

  this.http.get(this.SUBJECT_URL)
  .map(res => res.json())
  .subscribe(data =>
  {
     this.items = data;
  });

   //  this.requestService.loadData(this.SUBJECT_URL);

 }
 /*  */
 goToAbout(){

  this.navCtrl.push(AboutPage);

}

goToInfo(){

  this.navCtrl.push(InfoPage);

}

goToTimeline(){

  this.navCtrl.push(TimelinePage);

  }

  goToAddrequest(){

    this.navCtrl.push(AddquestPage);

  }

}
