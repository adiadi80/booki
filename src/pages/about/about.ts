import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import {ProfessionsPage} from "../professions-page/professions-page";


@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  items: FirebaseListObservable<any[]>;
  pitems = [];
  keys =  [];
  professionsPage = ProfessionsPage;

  constructor(public navCtrl: NavController,private afDB: AngularFireDatabase) {

  }


  ngOnInit():void {

    this.items = this.afDB.list('/professions/',{ preserveSnapshot: true });

    this.afDB.list('/professions/',{ preserveSnapshot: true }).subscribe(snapshots => {
      snapshots.forEach(snapshot => {
        this.pitems.push(snapshot.val());

        this.keys.push(snapshot.key);

      });
    })
    //console.log(x);
    console.log(this.pitems);



  }
}

