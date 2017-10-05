import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams, LoadingController, ToastController} from 'ionic-angular';
import {Register} from "../register/register";
//import {ResetPassword} from "../reset-password/reset-password";
import {UsersService} from "../../providers/users-service";
import {HomePage} from "../home/home";
import { AlertController } from 'ionic-angular';
import {PRegisterPage} from "../p-register/p-register";


/**
 * Generated class for the Login page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
  providers:[UsersService]
})
export class Login {

  public emailField:any;
  public passwordField:any;

  constructor(public navCtrl: NavController, public navParams: NavParams,private usersService:UsersService ,private alertCtrl :AlertController,
              public loadingCtrl: LoadingController,public toastCtrl: ToastController) {
  }


  submitResetPassword(){
    let prompt = this.alertCtrl.create({
      title: 'Enter your Email',  //'הכנס את כתובת האימייל שלך'
      message: 'New password send to you',//"סיסמה חדשה תישלח אליך"
      inputs: [
        {
          name: 'email',
          placeholder: ''
        },
      ],
      buttons: [
        {
          text: 'ביטול',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'שלח',
          handler: data => {

            //add preloader
            let loading = this.loadingCtrl.create({
              dismissOnPageChange: true,
              content: 'Reseting Your password...'});


            loading.present();
            this.usersService.forgotpassword(data.email).then(()=> {
              loading.dismiss().then(()=>{
                let alert = this.alertCtrl.create({title: 'בדוק את תיבת הדואר שלך' ,
                  subTitle:'מייל עם איפוס סיסמה נשלח אל תיבת הדואר שלך',
                  buttons: ['OK']
                });
                alert.present();
              })
            },error =>{
              loading.dismiss()
              let alert = this.alertCtrl.create({title: error.message ,
                buttons: ['OK']
              });
              alert.present();

            });
          }
        }
      ]
    });
    prompt.present();


  }



  ionViewDidLoad() {
    console.log('ionViewDidLoad Login');
  }




  submitLogin(){
    this.usersService.loginUser(this.emailField,this.passwordField).then(authData =>{
      this.navCtrl.setRoot(HomePage);
    },error =>{
      let alert = this.alertCtrl.create({title: error.message ,
        buttons: ['OK']
      });
      alert.present();
    });
  }

  submitRegister(){
    this.navCtrl.push(Register);
  }

  submitPRegister() {
    this.navCtrl.push(PRegisterPage);
  }
  googleSignIn(){
      this.usersService.googleSignIn().then(()=>{

    },error =>{
      let alert = this.alertCtrl.create({title: error.message ,
        buttons: ['OK']
      });
      alert.present();
    });
  }



}
