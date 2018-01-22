import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import 'rxjs/Rx';
import { Http,Headers, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';

/*
  Generated class for the RequestProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RequestProvider {

    //DATALIST_URL="";
   //  private NEW_USR : string  = "http://localhost/scolarys/Models/params/newuser.php";
  //  private LOGOUT_URL = "http://localhost";
  
     public item :any;
     public url : any;

  constructor(public http: Http) {
    console.log('Hello RequestProvider Provider');
  }
//DATALIST_URL:string

      loadData(){

        let items : any [];

       return this.http.get("http://localhost/scolarys/Models/datalist/subject.php").map(res => res.json())

        .subscribe(data =>
         {
              items = data;
            
            
        });
      
        // console.log(typeof(items));
       
        // return items;
        
    }

    deleteData(){

      let headers = new Headers({ 'Content-Type': 'application/json' });
      
     let options = new RequestOptions({ headers: headers });
      
     return this.http.delete(this.url+this.item.Id,options)
      
     .map((response:Response)=>response.json());

    }

    findData(){
  
    }

    addData(){

     let body = JSON.stringify(this.item);
      
     let headers = new Headers({ 'Content-Type': 'application/json' });
      
     let options = new RequestOptions({ headers: headers });
      
     return this.http.post(this.url, body, options)
      
     .map((response:Response)=>response.json());

      }


      updateData(){


        let body = JSON.stringify(this.item);
        
       let headers = new Headers({ 'Content-Type': 'application/json' });
        
       let options = new RequestOptions({ headers: headers });
        
       return this.http.put(this.url+this.item.Id, body, options)
        
       .map((response:Response)=>response.json());

      }

}
