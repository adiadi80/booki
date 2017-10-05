//import { Calendar } from '@ionic-native/calendar';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {professionInterface} from "../../data/Profession.interface";
import {CalendarPage} from "../calendar/calendar";

@IonicPage()
@Component({
  selector: 'page-profession-page',
  templateUrl: 'profession-page.html',
})
export class ProfessionPage {
  public strtDate: Date;

  calendarPage = CalendarPage;
  professionData : any;
  obj : any;


  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.obj  = this.navParams.data;
    for (var x in this.obj){
      this.professionData  = this.obj[x];
    }
    //this.professionData  = this.navParams.data.professions;


  }

  ionViewDidLoad() {




  }

  Number(a : string){
    return Number(a)

  }


}
