import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service'; 
import {FormGroup, FormBuilder, Validators,ReactiveFormsModule} from '@angular/forms';
import { Storage } from '@ionic/storage';
/////pages
import { WelcomePage } from '../welcome/welcome';
/**
 * Generated class for the ParentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-parent',
  templateUrl: 'parent.html',
})
export class ParentPage {

  parameter1;
 // parameter2;
  private NEW_USR : string  = "http://localhost/scolarys/Models/params/newuser.php";

  private NEW_PARENT : string  = "http://localhost/scolarys/Models/params/newparent.php";

  public parent :  FormGroup;  

  constructor(public navCtrl: NavController, public navParams: NavParams,private formBuilder: FormBuilder,private authService:AuthServiceProvider,
  private registerP:AuthServiceProvider,public storage: Storage) {

    //this.parameter1 = navParams.get('param1'); 
   // this.parameter2 = navParams.get('param2');

  }

  ngOnInit(){
    
      this.parent = this.formBuilder.group({
          
            parentName: ['', Validators.required],
            parentMail : ['', Validators.required],
            parentContact: ['', Validators.required]
      
            });
    
    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ParentPage');
  }


  newSubscribe(){


    // this.presentToast(); 
   
    let  usr =   this.parameter1 = this.navParams.get('param1'); 
    
    

    //let postdata = this.NEW_USR + body;

  this.authService.register(this.NEW_USR,usr).then((data) => {
     console.log(' result: '+ JSON.stringify(data));

     //this.storage.set('age', );

     this.newParentSub();

     
     
      },(err) => {
          //this.loading.dismiss();
         //this.presentToast(err);
       });  

 /**/

    

          this.goToWelcome();
  
  }


  newParentSub(){

    let body = this.parent.value;


   this.registerP.register(this.NEW_PARENT,body).then((dataP) => {
    console.log(' result: '+ JSON.stringify(dataP));
   
   },(err) => {
        //this.loading.dismiss();
       //this.presentToast(err);
     });  
     

  }
  goToWelcome(){

    this.navCtrl.setRoot(WelcomePage);

  }

}
