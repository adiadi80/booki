import { Component } from '@angular/core';
import {NavController, ModalController} from 'ionic-angular';
import {UsersPage} from "../users-page/users-page";
import {professionInterface} from "../../data/Profession.interface";
import {ProfessionsService} from "../../services/Professions.services";
import {ProfessionPage} from "../profession-page/profession-page";
@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {


  professions : professionInterface[];


  constructor(public navCtrl: NavController,private professionsService : ProfessionsService ,public modalCtrl : ModalController) {

  }

  ionViewWillEnter(){//add to Favorite
    this.professions = this.professionsService.getFavoriteQuotes();
  }

  submitUserPage(){//enter to user page
    this.navCtrl.push(UsersPage)
  }

  onClickCard(profession :professionInterface){
    //const modal = this.modalCtrl.create(ProfessionPage);
    //modal.present();
    this.navCtrl.push(ProfessionPage)
  }


}
