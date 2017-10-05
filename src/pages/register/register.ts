import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams, AlertController} from 'ionic-angular';
import {UsersService} from "../../providers/users-service";
import {HomePage} from "../home/home";

/**
 * Generated class for the Register page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
  providers:[UsersService]
})
export class Register {

  public emailField:any;
  public passwordField:any;
  //public passwordFieldc:any;
  public alertCtrl :any;
  public nameField :any;
  public lastNameField :any;
  public  pnField : any;

  constructor(public navCtrl: NavController, public navParams: NavParams,private usersService:UsersService,alertCtrl: AlertController) {
  }



  signUserUp(){
    //if(this.passwordField == passwordFieldc)
    this.usersService.signUpUser(this.emailField,this.passwordField , this.nameField ,
      this.pnField).then(authData =>{

      console.log(this.lastNameField);
      console.log(this.nameField);
      this.navCtrl.setRoot(HomePage);
    },error =>{
      let alert = this.alertCtrl.create({title: error.message ,
        buttons: ['OK']
      });
      alert.present();
    });
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad Register');
  }

}
