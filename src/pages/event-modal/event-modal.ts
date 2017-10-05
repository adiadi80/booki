import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import * as moment from 'moment';
import {professionInterface} from "../../data/Profession.interface";
import {Page} from 'ionic/ionic'
import _date = moment.unitOfTime._date;


@IonicPage()
@Component({
  selector: 'page-event-modal',
  templateUrl: 'event-modal.html',
})



export class EventModalPage {




  static get parameters() {
    return [[NavController], [NavParams] , [ViewController]];
  }

  cData = [];
  event = { startTime: new Date().toISOString(), endTime: new Date().toISOString() };
  selectedDay = new Date();
  items =[];

  min;

  profession : professionInterface;
  constructor(public navCtrl: NavController, private navParams: NavParams, public viewCtrl: ViewController) {
    let preselectedDate = moment(this.navParams.get('selectedDay')).format();
    this.event.startTime = preselectedDate;
    this.event.endTime = preselectedDate;
    this.profession = this.navParams.get('professionD');
    this.selectedDay = this.navParams.get('selectedDay');


    let cd = this.navParams.get('cData');
    //this.cData.startTime = cd;
    for(var i in cd){
      this.cData.push({startTime : cd[i].startTime })
    }






    var date = new Date(this.selectedDay);


    var day = this.selectedDay.getDay();
    if(this.profession.dateTime[day].work != "false"){
      var endTime = Number(this.profession.dateTime[day].workHours.end);
      var startTime = Number(this.profession.dateTime[day].workHours.start);
      this.min = Number(this.profession.dateTime[day].duration);
      var time = date.getMinutes();

      date.setHours(startTime);
      date.setMinutes(0)


      while(date.getHours() <  endTime){
        var b : boolean = true;

        for(var i in this.cData){
          if(this.cData[i].startTime.toISOString() == date.toISOString()){
            b = false;
            break;
          }
        }
        if(b)
          this.items.push(new Date(date.getTime()));

        date.setMinutes(date.getMinutes()+this.min);

      }
    }


  }

  pickHour(item) {

    for (var i = 0; i < this.items.length; i++) {

      if (this.items[i] == item) {

        this.event.startTime = this.items[i].toISOString();

        console.log(this.items[i]);
        this.items[i].setMinutes(this.items[i].getMinutes() + this.min);
        console.log(this.items[i]);

        this.event.endTime  = this.items[i].toISOString();
        this.viewCtrl.dismiss(this.event);
      }


    }

  }

  ionViewWillLoad(){

  }

  cancel() {
    this.viewCtrl.dismiss();
  }

  save() {
    this.viewCtrl.dismiss(this.event);
  }





}
