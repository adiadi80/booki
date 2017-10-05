import {Component, NgZone, OnInit} from '@angular/core';
import {AlertController, IonicPage, NavController, NavParams, Platform, ViewController} from 'ionic-angular';
import {UsersService} from "../../providers/users-service";

import {googlemaps} from 'googlemaps';
import { NativeGeocoder, NativeGeocoderReverseResult, NativeGeocoderForwardResult } from '@ionic-native/native-geocoder';
import {HomePage} from "../home/home";
import {Location} from "../../models/location";
import {myDateTime} from "../../models/myDateTime";


/**
 * Generated class for the PRegisterPage page.
 *  <script src="http://maps.google.com/maps/api/js?key=AIzaSyCBiyFmL0-YWXHSWhDvJqpnWSb3PloGyJwcontent_copy&sensor=true"></script>
 <script src="https://maps.googleapis.com/maps/api/js?v=3.exp"></script>
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-p-register',
  templateUrl: 'p-register.html',
  providers:[UsersService,NativeGeocoder]

})



export class PRegisterPage {


  public emailField:any;
  public passwordField:any;
  public alertCtrl :any;
  public nameField :any;
  public  pnField : any;
  public  profession : any;
  public  cname : any;
  public dateTime = [];
  public  location: Location = {
    lat :0,
    lng : 0
  };
  public text : string;
  days = [];

  checkStatus : boolean = false;
  //autocompleteItems: any;
  //autocomplete: any;
  //acService:any;
  //placesService: any;

  constructor(public usersService : UsersService,public navCtrl : NavController) {
    this.location.lat = 123;
    this.location.lng = 324;
    for(var x = 0 ; x <= 6 ; x++){
      this.dateTime.push({duration : 0  ,work : 'false' , workHours : {end : 0,start : 0}})
    }



  }

  signUpP(){
    //if(this.passwordField == passwordFieldc)
    this.usersService.signUpP(this.emailField,this.passwordField , this.nameField,
      this.pnField ,this.cname ,this.dateTime ,this.location ,this.text,this.profession).then(authData =>{

      //this.navCtrl.setRoot(HomePage);
    },error =>{
      let alert = this.alertCtrl.create({title: error.message ,
        buttons: ['OK']
      });
      alert.present();
    });
  }


  onSelectChange() {
    this.dateTime= [];

    for(var x = 0 ; x <= 6 ; x++){
      this.dateTime.push({duration : 0  ,work : 'false' , workHours : {end : 0,start : 0}})
    }




    for(var i  in this.dateTime){
      for(var y in this.days )
      {
        if(this.days[y] == i.toString()){
          this.dateTime[i].work = "true";
          break;
        }
      }

    }



  }



}





/*




implements OnInit



  ngOnInit() {
   this.acService = new google.maps.places.AutocompleteService();
   this.autocompleteItems = [];
   this.autocomplete = {
     query: ''
   };
 }


 updateSearch() {
   console.log('modal > updateSearch');
   if (this.autocomplete.query == '') {
     this.autocompleteItems = [];
     return;
   }
   let self = this;
   let config = {
//types:  ['geocode'], // other types available in the API: 'establishment', 'regions', and 'cities'
     input: this.autocomplete.query,
     componentRestrictions: {  }
   }
   this.acService.getPlacePredictions(config, function (predictions, status) {
     console.log('modal > getPlacePredictions > status > ', status);
     self.autocompleteItems = [];
     predictions.forEach(function (prediction) {
       self.autocompleteItems.push(prediction);
     });
   });
 }



 chooseItem(item: any) {
   this.nativeGeocoder.reverseGeocode(52.5072095, 13.1452818)
     .then((result: NativeGeocoderReverseResult) => console.log(JSON.stringify(result)))
     .catch((error: any) => console.log(error));

   this.nativeGeocoder.forwardGeocode('Berlin')
     .then((coordinates: NativeGeocoderForwardResult) => console.log('The coordinates are latitude=' + coordinates.latitude + ' and longitude=' + coordinates.longitude))
     .catch((error: any) => console.log(error));
       //console.log(item.formatted_address)


 }


 /////////////////////////////////////////////////////////////



     <ion-item *ngFor="let item of autocompleteItems"
             (click)="chooseItem(item)">
     {{ item.description }}
   </ion-item>

     <ion-searchbar
     [(ngModel)]="autocomplete.query"
     [showCancelButton]="true"
     (ionInput)="updateSearch()"
     (ionCancel)="dismiss()"
     placeholder="כתובת בית העסק:עיר רחוב מספר בית">
   </ion-searchbar>

  */
