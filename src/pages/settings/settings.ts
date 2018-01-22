import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service'; 
import {FormGroup, FormBuilder, Validators,ReactiveFormsModule} from '@angular/forms';
//pages
import {TabsPage} from '../tabs/tabs';
/**
 * Generated class for the SettingsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {

  public type = 'password';
  public showPass = false;
  private UPDATE ="http://localhost/scolarys/Models/params/params.php";

  public update :  FormGroup;  

  connex:any;


  constructor(public navCtrl: NavController, public navParams: NavParams,public storage: Storage,
    private authService:AuthServiceProvider,private formBuilder: FormBuilder) {
  }

  ionViewDidLoad() {

    console.log('ionViewDidLoad SettingsPage');

    this.storage.get('age').then((val) => {

      this.connex = val;

       console.log('val vaut : ', val);
    });
    //console.log();
  }

  backArrow(){

    this.navCtrl.setRoot(TabsPage);

  }


  ngOnInit(){
    
    this.update = this.formBuilder.group({
        
           loginup: ['', Validators.required],
           passup: ['', Validators.required]
        //   schoolup:['', Validators.required],
       //    classup:['', Validators.required]
    
          });
  
  }

  managePassword(){

    this.showPass = !this.showPass;
    
       if(this.showPass){
         this.type = 'text';
       } else {
         this.type = 'password';
       }


  }

  updateProfil(){

    let body = this.update.value ;
    let usrcon =  {del:this.connex};

  
   this.authService.register(this.UPDATE,usrcon).then((dataUP) => {
    console.log(' result: '+ JSON.stringify(dataUP));
   
   },(err) => {
        //this.loading.dismiss();
       //this.presentToast(err);
     });
     this.authService.register(this.UPDATE,body).then((dataUP) => {
      console.log(' result: '+ JSON.stringify(dataUP));
     
     },(err) => {
          //this.loading.dismiss();
         //this.presentToast(err);
       });
   
  }



}
