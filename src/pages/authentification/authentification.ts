import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {FormGroup, FormBuilder, Validators,ReactiveFormsModule} from '@angular/forms';
import {NewregisPage} from '../newregis/newregis';

import { AuthServiceProvider } from '../../providers/auth-service/auth-service'; 
import { Storage } from '@ionic/storage';
import { LoadingController } from 'ionic-angular';

import {HomePage} from '../home/home';
import {TabsPage} from '../tabs/tabs';
import {ForgetPage} from '../forget/forget';
/**
 * Generated class for the AuthentificationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-authentification',
  templateUrl: 'authentification.html',
})
export class AuthentificationPage {

  public auth : FormGroup;
  data: any;
  public error:string;
  

  constructor(public navCtrl: NavController, private formBuilder: FormBuilder , public navParams: NavParams ,private authService:AuthServiceProvider,public storage: Storage,
    public loadingCtrl: LoadingController) {
  }


ngOnInit(){
  
    this.auth = this.formBuilder.group({
      
          login: ['', Validators.required],
            
          password: ['',Validators.required],
         
          });
  
  }
  

  ionViewDidLoad() {
    console.log('ionViewDidLoad AuthentificationPage');
  }

  doLogin() {

    this.presentLoading() ;
    
    this.authService.login(this.auth.value).then((result) => {
      // this.loading.dismiss();
     //  this.console();
          this.data = result;   
          
          console.log(this.data.verif);
          
          if (this.data.verif !=="erreur"){
          
            var splitted = this.data.verif.split("##"); 

                         console.log(splitted[0]);
                         
                         this.storage.set('age', splitted[1]);
                         
            //val   =  this.data.verif ;
            /*   this.storage.get('age').thseren((val) => {
              console.log('Your age is', val);
            }); */
               this.goToContainPage();

          } else {

              /// error
              this.error = "Identifiant ou Mot de passe incorrect!!";
          }

       //localStorage.setItem('token', this.data.access_token);
       //storage.set('name', 'Max');
       //this.goToContainPage();
      // this.navCtrl.setRoot(TabsPage);
     }, (err) => {
     //  this.loading.dismiss();
       //this.presentToast(err);
         this.error = "erreur de connection au serveur verifiez votre connection et reessayer!!";
     });
   }
 

  goToRegisPage() {
    //push another page onto the history stack
    //causing the nav controller to animate the new page in
    this.navCtrl.push(NewregisPage);
  
  }
  
  goToContainPage(){
  
    this.navCtrl.setRoot(TabsPage);

  }

  goToForgetPage(){
   
    this.navCtrl.push(ForgetPage);
    
  }

  presentLoading() {
    let loader = this.loadingCtrl.create({
      dismissOnPageChange: true,
      content: "Veuillez Patienter...",
      duration: 3000
    });
    loader.present();
  }

  //this.LoginIput = new FormControl();
/* 
  checkPreviousAuthorization(): void { 
    if((window.localStorage.getItem('username') === "undefined" || window.localStorage.getItem('username') === null) && 
       (window.localStorage.getItem('password') === "undefined" || window.localStorage.getItem('password') === null)) {
      this.rootPage =HomePage ;
    } else {
      this.rootPage = ContainPage ;
    }
  }
   */
 console():void{
 
  console.log('test button click ' + JSON.stringify(this.auth.value));


 }

}
