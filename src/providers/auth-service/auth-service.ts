import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
//import { Storage } from '@ionic/storage';

import { Http ,Headers} from '@angular/http';
/*
  Generated class for the AuthServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthServiceProvider {

  private LOGIN_URL = "http://localhost/scolarys/Models/Auth/authdoor.php";
 
  private LOGOUT_URL = "http://localhost";

  
/* 
  contentHeader = new Headers({"Content-Type": "application/json"});
  error: string; public storage: Storage*/

  constructor(public http: Http,) {
    console.log('Hello AuthServiceProvider Provider');
  }


/*  f(){

 this.storage.get('test').then((val) => {

   console.log('Your age is', val);
  
  });


 } */
 
 /*
fav(){

 this.storage.ready().then(() => {
    this.storage.get('profile').then(profile => {
     // this.user = JSON.parse(profile);
    }).catch(console.log);
  });

}


 isFav() {
  this.storage.get('team ' + this.teamId).then((value) => {
    value ? this.favorite = true : this.favorite = false
  }).catch(() => this.favorite = false);
}
 

  login(credentials) {
    this.http.post(this.LOGIN_URL, JSON.stringify(credentials), { headers: this.contentHeader })
      .map(res => res.json())
      .subscribe(
        data => this.authSuccess(data.id_token),
        err => this.error = err
      );
  }

  */


//login to connect

login(credentials) {
  
    return new Promise((resolve, reject) => {
        
      let headers = new Headers();

      console.log('credentials',credentials)
      
      headers.append("Accept", 'application/json');
   
      this.http.post(this.LOGIN_URL, JSON.stringify(credentials) , {headers: headers})
  
          .subscribe(res => {
         // console.log('api :'+ this.LOGIN_URL  +'  JSON: '+JSON.stringify(credentials),'res status : '+res.status);
          // console.log(res);   
         resolve(res.json());
       
          }, (err) => {
            reject(err);
          });
    });
  }



// register to use

register(URL,data) {
  
    return new Promise((resolve, reject) => {
  
        let headers = new Headers();
  
        headers.append("Accept", 'application/json');
  
        this.http.post(URL , JSON.stringify(data),{headers: headers})
  
          .subscribe(res => {
            
            console.log(JSON.stringify(data));

            resolve(res.json());
  
          }, (err) => {
  
            reject(err);
  
          });
    });
    
  }
  

// logout


logout(){

  return new Promise((resolve, reject) => {
     
    let headers = new Headers();
      
    //  headers.append('X-Auth-Token', localStorage.getItem('token'));

      this.http.post(this.LOGOUT_URL+'logout', {}, {headers: headers})
      
      .subscribe(res => {
      
        //localStorage.clear();
    
      }, (err) => {
      
        reject(err);
      
      });
 
    });
}
/*

submit(data) {
  //var link = 'http://nikola-breznjak.com/_testings/ionicPHP/api.php';
  var body = JSON.stringify(data);
  
  this.http.post(this.NEW_USR , data)
  .subscribe(datas => {
      //this.data.response = datas.body;
  }, error => {
      console.log("Oooops!");
  });
}
 
  checkPreviousAuthorization(): void { 
    if((window.localStorage.getItem('username') === "undefined" || window.localStorage.getItem('username') === null) && 
       (window.localStorage.getItem('password') === "undefined" || window.localStorage.getItem('password') === null)) {
      this.rootPage =HomePage ;
    } else {
      this.rootPage = ContainPage ;
    }
  }
   */

}
