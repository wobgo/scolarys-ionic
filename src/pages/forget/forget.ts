import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service'; 
import { AlertController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
//page
import { SettingsPage } from '../settings/settings';
import { NewregisPage } from '../newregis/newregis';
/**
 * Generated class for the ForgetPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-forget',
  templateUrl: 'forget.html',
})
export class ForgetPage {

  public reset:FormGroup;
  private VERIF_INFO : string = "http://localhost/scolarys/Models/datasearch/forget.php";
  forget : any;

  constructor(public navCtrl: NavController, public navParams: NavParams,private formBuilder: FormBuilder
    ,private authService:AuthServiceProvider,public alertCtrl: AlertController,public storage: Storage) {
  }


  ngOnInit(){
    
      this.reset = this.formBuilder.group({
          
        forgetPname: ['', Validators.required],
        forgetPmail : ['', Validators.required],
        forgetPnumb: ['', Validators.required],
        username: ['', Validators.required]
      
            });
    
    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ForgetPage');
  }

  regenerate(){

      let verifReset = this.reset.value;

      this.authService.register(this.VERIF_INFO,verifReset).then((data) => {
        
        console.log(' result: '+ JSON.stringify(data));
   
        this.forget = data;

            //console.log('rine naruto  ',this.forget);

        if(this.forget.findUsr !=="erreur"){
          
          this.storage.set('age', this.forget.findUsr );
           // console.log(this.forget.findUsr);
          this.presentAlert();

        } else{

          this.presentConfirm();
        
        }
         
         },(err) => {
             //this.loading.dismiss();
            //this.presentToast(err);
          });   


  }

          
  presentConfirm() {

    let alert = this.alertCtrl.create({
      title: 'Aucun utilisateur trouve',
      subTitle:'Voulez vous creer un nouveau compte?',
    
      buttons: [
        {
          text: 'Annuler',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
           // this.alertShown=false;
          }
        },
        {
          text: 'Ok',
          handler: () => {
            this.goToRegisPage();

            //console.log('Yes clicked');
           // this.platform.exitApp();
          }
        }
      ]
    });
     alert.present().then(()=>{
     // this.alertShown=true;
    });
  }
   
      presentAlert(){

        let alert = this.alertCtrl.create({

          title: 'Utilisateur retrouve',
          subTitle:'veuillez definir vos nouveaux parametres',
          buttons: [
            {    text: 'Ok',
            handler: () => {
              this.goToParamPage();
  
              //console.log('Yes clicked');
             // this.platform.exitApp();
            }}]
        });

        alert.present();

      }    
          
  goToParamPage(){
  
    this.navCtrl.setRoot(SettingsPage);

  }


  goToRegisPage() {
    //push another page onto the history stack
    //causing the nav controller to animate the new page in
    this.navCtrl.push(NewregisPage);
  
  }
  



}
