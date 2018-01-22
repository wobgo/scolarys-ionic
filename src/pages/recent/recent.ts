import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular';
import { ModalController } from 'ionic-angular';
import { IonicPage, NavController, Platform, NavParams,Events } from 'ionic-angular';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

/**
 * Generated class for the RecentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-recent',
  templateUrl: 'recent.html',
})
export class RecentPage {

     public  RECENT_URL = "http://localhost/scolarys/Models/datalist/question.php";

     public items : any = [];

     

  constructor(public navCtrl: NavController , public modalCtrl : ModalController, public viewCtrl : ViewController , public navParams: NavParams,
    private http:Http,public events:Events) {
      var self = this
      this.events.subscribe("notifClose",(res)=>{
         this.recent();
      });
 
              this.recent();


}

ionviewdidenter(){
  
  }


    public openModal(characterNum) {
    
        let modal = this.modalCtrl.create('ModalPage', characterNum);
        //alert(JSON.stringify(characterNum));
        modal.present();
      }

      OnInit (){

        console.log('test ');

      }
 /*  ionViewDidLoad() {
   
    console.log('ionViewDidLoad RecentPage');
   
    
  }

*/
  recent(){
    this.http.get(this.RECENT_URL).map(res => res.json())

    .subscribe(data =>
    {
       this.items = data;
    });
      //alert(JSON.stringify(this.items));
     //  this.requestService.loadData(this.SUBJECT_URL);
    //this.character = this.items[this.navParams.get('charNum')];

  }
   /*
  public openModal(characterNum){
 
    var modalPage = this.modalCtrl.create('ModalPage',characterNum);

    alert(characterNum);

    modalPage.present();

  }

 */



}
