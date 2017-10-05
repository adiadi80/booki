import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {Login} from "../pages/login/login";
import {Register} from "../pages/register/register";
import {ResetPassword} from "../pages/reset-password/reset-password";
//import {UsersService} from "../providers/users-service";
import {UsersPage} from "../pages/users-page/users-page";
import {ProfessionsPage} from "../pages/professions-page/professions-page";
import {ProfessionsService} from "../services/Professions.services";
import { HttpModule } from '@angular/http';
import {ProfessionPage} from "../pages/profession-page/profession-page";
import {AgmCoreModule} from "angular2-google-maps/esm/core";
import {NgCalendarModule} from "ionic2-calendar";
import {CalendarPage} from "../pages/calendar/calendar";

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import {PRegisterPage} from "../pages/p-register/p-register";
//import {EventModalPage} from "../pages/event-modal/event-modal";


export const firebaseConfig = {
  apiKey: "AIzaSyC9GfYeBRn389_bqjbmJf6aAJkuEdchO38",
  authDomain: "booki-55ef9.firebaseapp.com",
  databaseURL: "https://booki-55ef9.firebaseio.com",
  projectId: "booki-55ef9",
  storageBucket: "booki-55ef9.appspot.com",
  messagingSenderId: "890543773115"
};

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    Login,
    Register,
    ResetPassword,
    UsersPage,
    ProfessionsPage,
    ProfessionPage,
    CalendarPage,
    PRegisterPage


  ],
  imports: [
    NgCalendarModule,
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAGsKDwjksehPh7iL3pM43prnw-I23Dywg'
    })

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    Login,
    Register,
    ResetPassword,
    UsersPage,
    ProfessionsPage,
    ProfessionPage,
    CalendarPage,
    PRegisterPage


  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ProfessionsService
  ]
})
export class AppModule {}
