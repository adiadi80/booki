import {Component, Injectable, Input, NgZone, OnInit} from '@angular/core';
import {AlertController, Events, IonicPage, ModalController, NavController, NavParams} from 'ionic-angular';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Nav } from 'ionic-angular';
import * as firebase from 'firebase';
import * as moment from 'moment';
import {AuthService} from "./auth"
import {professionInterface} from "../../data/Profession.interface";
import {EventModalPage} from "../event-modal/event-modal";
import {UsersService} from "../../providers/users-service";




@Component({
  selector: 'page-calendar',
  templateUrl: 'calendar.html',
  providers:[UsersService]
})

@Injectable()
export class CalendarPage implements OnInit {
  eventSource = [];
  viewTitle: string;
  selectedDay = new Date();
  profession : professionInterface;
  pKey;
  uKey = [];
  obj : any;

  public items :any ;
  uData = {
    name:"",
    pn : ""
  };

  cData :any ;

  userCData =   [{
    startTime : new Date(),
    endTime : new Date()
  }];

  calendar = {
    mode: 'month',
    currentDate: new Date(),

  };




  constructor(private zone: NgZone,public events: Events,public nav :Nav, public navParams: NavParams,public navCtrl: NavController
    ,private afDB: AngularFireDatabase, private modalCtrl: ModalController
              , private alertCtrl: AlertController ,public us : UsersService) {

    this.obj  = this.navParams.data;
    for (var x in this.obj){
      this.profession  = this.obj[x];
      this.pKey = x;
    }








  }


  ngOnInit(): void {


    //get the user data
    firebase.database().ref('/user/' + this.us.getUserId().uid).on('value', itemSnapshot => {
        itemSnapshot.forEach( snapshot => {

        if("phoneNumber" == snapshot.key){
          this.uData.pn = snapshot.val();
        }
        else if("name" == snapshot.key) {
          this.uData.name = snapshot.val();
        }
        return false;
      });
    });




    //get from fb the users list id
  this.uKey = [];

    firebase.database().ref('/user/' ).on('value', itemSnapshot => {
      itemSnapshot.forEach( snapshot => {

        this.uKey.push(snapshot.key);

        return false;
      });
    });



  //get from fb the calendar data
  this.cData = [];

    for(var x in this.uKey) {
      firebase.database().ref("/cal/" + this.pKey + "/" + this.uKey[x]).on('value', itemSnapshot => {
        itemSnapshot.forEach(snapshot => {

          this.cData.push({startTime: new Date(snapshot.val().startTime), endTime: new Date(snapshot.val().endTime)});

          return false;
        });
      });
    }





//get from fb the user calendar data
  this.userCData = [];

    firebase.database().ref("/cal/" + this.pKey +"/" + this.us.getUserId().uid).on('value', itemSnapshot => {
      itemSnapshot.forEach(snapshot => {
        this.userCData.push({startTime  : new Date(snapshot.val().startTime),endTime : new Date(snapshot.val().endTime)});

        return false;
      });
    });


  this.eventSource = this.userCData;
  this.userCData = [];



  // if("startTime" == snapshot.key)
  //   this.cData.push({start : snapshot.val()});



  }





  addEvent() {


    let modal = this.modalCtrl.create('EventModalPage', {
      selectedDay: this.selectedDay,
      professionD : this.profession,
      cData : this.cData
    });

    //console.log(this.cData);
    modal.present();
    modal.onDidDismiss(data => {
      if (data) {
        let eventData = data;

        eventData.startTime = new Date(data.startTime);
        eventData.endTime = new Date(data.endTime);


        let events = this.eventSource;
        events.push(eventData);
        this.eventSource = [];





        setTimeout(() => {
          this.eventSource = events;

          var calDate = {
            startTime : eventData.startTime.toString(),
            endTime : eventData.endTime.toString(),
            name:  this.uData.name ,
            phoneNumber: this.uData.pn
          }


          this.afDB.list("/cal/" + this.pKey +"/" + this.us.getUserId().uid ).push(calDate);
        });
      }
    });
  }

  onViewTitleChanged(title) {
    this.viewTitle = title;
  }

  onEventSelected(event) {
    let start = moment(event.startTime).format('LLLL');
    let end = moment(event.endTime).format('LLLL');

    let alert = this.alertCtrl.create({
      title: '' + this.profession.cname,
      subTitle: 'From: ' + start + '<br>To: ' + end,
      buttons: ['OK']
    })
    alert.present();
  }

  onTimeSelected(ev) {
    this.selectedDay = ev.selectedTime;

  }
}
