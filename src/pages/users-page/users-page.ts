import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {UsersService} from "../../providers/users-service";
import {Login} from "../login/login";

/**
 * Generated class for the UsersPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-users-page',
  templateUrl: 'users-page.html',
  providers:[UsersService]
})
export class UsersPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,private userService: UsersService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UsersPage');
  }

  submitLoguot(){
    this.userService.logoutUser().then(() =>{
      this.navCtrl.setRoot(Login);
    });
  }

}
