import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {RequestProvider} from '../../providers/request/request'
import {FormGroup, FormBuilder, Validators,ReactiveFormsModule} from '@angular/forms';

import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service'; 
import { ToastController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';


import { ParentPage } from '../parent/parent';
/**
 * Generated class for the NewregisPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-newregis',
  templateUrl: 'newregis.html',
})
export class NewregisPage {

  private CLASS_URL : string  = "http://localhost/scolarys/Models/datalist/classroom.php";

  private SCHOOL_URL : string = "http://localhost/scolarys/Models/datalist/school.php";
  
  public alertShown:boolean = false;

  getClass : any =[]; 

  getSchool: any =[]; 

 //record data use restfull api

 public usr : FormGroup;

  constructor(public navCtrl: NavController, public navParams: NavParams, private http:Http, private formBuilder: FormBuilder,private authService:AuthServiceProvider,
    public toastCtrl: ToastController,public alertCtrl: AlertController) {
  }



ngOnInit(){
  
    this.usr = this.formBuilder.group({
        
          nlogin: ['', Validators.required],
           npd : ['', Validators.required],
         username: ['', Validators.required]
    
          });
  
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewregisPage');
    this.doSubscribe();
    this.ClassSelected();
  }

  ClassSelected(){

    this.http.get(this.SCHOOL_URL)
    .map(res => res.json())
    .subscribe(data =>
    {
       this.getSchool = data;
    });


  }

  doSubscribe(){

    this.http.get(this.CLASS_URL)
    .map(res => res.json())
    .subscribe(data =>
    {
       this.getClass  = data;
    });


  }

  presentConfirm() {
    let alert = this.alertCtrl.create({
      title: 'Confirm Exit',
      message: 'Do you want Exit?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
            this.alertShown=false;
          }
        },
        {
          text: 'Yes',
          handler: () => {
            console.log('Yes clicked');
           // this.platform.exitApp();
          }
        }
      ]
    });
     alert.present().then(()=>{
      this.alertShown=true;
    });
  }

  Sharing(){

    this.navCtrl.push(ParentPage, {
      param1:this.usr.value
    });

  }


  presentToast() {
    let toast = this.toastCtrl.create({
      message: 'User was added successfully',
      duration: 3000
    });
    toast.present();
  }

}
