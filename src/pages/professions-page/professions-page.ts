import { Component } from '@angular/core';
import {NavParams, AlertController, NavController} from 'ionic-angular';
import {professionInterface} from "../../data/Profession.interface";
import {ProfessionsService} from "../../services/Professions.services";
import {ProfessionPage} from "../profession-page/profession-page";
import Professions from "../../data/Professions";


@Component({
  selector: 'page-professions-page',
  templateUrl: 'professions-page.html',
})
export class ProfessionsPage {




  professionPage = ProfessionPage;


  professionGroup = []  ;
  professionG : any;
  keys = [];

  constructor(public navCtrl: NavController, private navParms :NavParams ,private alertCtrl :AlertController , private professionsService : ProfessionsService) {
    this.professionG = this.navParms.data;
    for(var x in this.professionG){
      this.keys.push(x);
    }




  }
  ionViewDidLoad(){
    //this.professionGroup = this.navParms.data;
  }

  onAddToFavorite(selectProfession : professionInterface){
    const alert = this.alertCtrl.create({
      title: 'ADD TO FAVORITE',
      subTitle: 'אתה עומד להוסיף את'+'<br>'+selectProfession.person,
      buttons:[{
        text:'ADD',
        handler:()=>{
          this.professionsService.addProfessionToFavorites(selectProfession);
        }
      },{
        text:'CANCEL',
        handler:()=>{
          console.log('Cancelled!');
        }
      }
      ]
    });
    alert.present();

  }



}
