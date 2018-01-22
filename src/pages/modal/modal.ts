import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams ,Platform,Events} from 'ionic-angular';
import { ViewController } from 'ionic-angular';
import { NativeAudio } from '@ionic-native/native-audio';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
/**
 * Generated class for the ModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-modal',
  templateUrl: 'modal.html',
})
export class ModalPage {
  character;


  public items : any = [];

  public  RECENT_URL = "";
  private DISP_list = "http://localhost/scolarys/Models/datalist/last.php";
/*  // public message : string  = this.navParams.get('message');


  constructor(public navCtrl: NavController, public viewCtrl : ViewController , public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalPage');
  }
*/
  public closeModal(){
    this.DeleteNotif();
    this.events.publish("notifClose",true);
    this.viewCtrl.dismiss();
   
    } 


    constructor(
      public platform: Platform,
      public params: NavParams,
      public viewCtrl: ViewController,private http:Http,
      private authService:AuthServiceProvider,
      private nativeAudio: NativeAudio,
      public events:Events
    ) {
     this.SuccessResponse();
   //   this.recentNotif();
   /*    var characters = [
        {
          name: 'Gollum',
          quote: 'Sneaky little hobbitses!',
          image: 'assets/img/avatar-gollum.jpg',
          items: [
            { title: 'Race', note: 'Hobbit' },
            { title: 'Culture', note: 'River Folk' },
            { title: 'Alter Ego', note: 'Smeagol' }
          ]
        },
        {
          name: 'Frodo',
          quote: 'Go back, Sam! I\'m going to Mordor alone!',
          image: 'assets/img/avatar-frodo.jpg',
          items: [
            { title: 'Race', note: 'Hobbit' },
            { title: 'Culture', note: 'Shire Folk' },
            { title: 'Weapon', note: 'Sting' }
          ]
        },
        {
          name: 'Samwise Gamgee',
          quote: 'What we need is a few good taters.',
          image: 'assets/img/avatar-samwise.jpg',
          items: [
            { title: 'Race', note: 'Hobbit' },
            { title: 'Culture', note: 'Shire Folk' },
            { title: 'Nickname', note: 'Sam' }
          ]
        }
      ]; */
     // this.character = characters[this.params.get('charNum')];
    }

    ionwillenter(){
      this.SuccessResponse();
      console.log('testuelllllllllllllllllllll');
    }


  /*   recentNotif(){
      
          this.http.get(this.RECENT_URL).map(res => res.json())
      
          .subscribe(data =>
          {
             this.items = data;
          });
        
             // alert(JSON.stringify(data))
           //  this.requestService.loadData(this.SUBJECT_URL);
         // this.character = this.items[this.navParams.get('charNum')];
          //this.character = this.items[this.params.get('charNum')];
        }
 */
        DeleteNotif(){

              let  getPostdata = this.params.get('charNum');
              let body = {del:getPostdata} ;
                                    alert(body.del);
               this.authService.register(this.DISP_list,body).then((data) => {
       console.log(' result: '+ JSON.stringify(data));
                 },(err) => {
       //  this.loading.dismiss();
         //this.presentToast(err);
             });


        }

        SuccessResponse(){
/* */
          this.nativeAudio.preloadSimple('uniqueId1', '../../assets/sounds/applause.mp3');
          this.nativeAudio.play('uniqueId1',() => console.log('uniqueId1 is done playing'));
 
        }

       


}
