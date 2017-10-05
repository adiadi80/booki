import {Component, ViewChild} from '@angular/core';
import {MenuController, Platform,NavController} from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


import { TabsPage } from '../pages/tabs/tabs';

import * as firebase from 'firebase';
import {Login} from "../pages/login/login";
import {UsersPage} from "../pages/users-page/users-page";

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = TabsPage;
  usersPage = UsersPage;
  @ViewChild('nav') nav:NavController;


  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen,
              private menuCtrl : MenuController ) {

    // Initialize Firebase
    var config = {
      apiKey: "AIzaSyC9GfYeBRn389_bqjbmJf6aAJkuEdchO38",
      authDomain: "booki-55ef9.firebaseapp.com",
      databaseURL: "https://booki-55ef9.firebaseio.com",
      projectId: "booki-55ef9",
      storageBucket: "booki-55ef9.appspot.com",
      messagingSenderId: "890543773115"
    };
    firebase.initializeApp(config);

    firebase.auth().onAuthStateChanged((user)=>{
      if(user){
        console.log("=" + user);
        this.rootPage = TabsPage;
      }else{
        console.log("!" + user);
        this.rootPage = Login;
      }
      });



    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });


  }

  onLoad(page: any){
    this.nav.push(page)
    //this.nav.setRoot(page);
    this.menuCtrl.close();
  }

}
