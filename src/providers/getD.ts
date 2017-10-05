import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import * as firebase from 'firebase';
import {AngularFireDatabase} from "angularfire2/database";
import {retry} from "rxjs/operator/retry";



@Injectable()
export class getD {




  constructor (private afDB: AngularFireDatabase){
  }

  getUserId(){
    return firebase.auth().currentUser;
  }


  getUserName() {
    var name ;

    this.afDB.list('user/' + this.getUserId().uid, { preserveSnapshot: true })
      .subscribe(snapshots => {
        snapshots.forEach(snapshot => {
          if("name" == snapshot.key){
            name = snapshot.val();
            return name;
          }
        });
      })

  }

  getUserPN(){
    var pn;

    this.afDB.list('/user/' + this.getUserId().uid, { preserveSnapshot: true })
      .subscribe(snapshots => {
        snapshots.forEach(snapshot => {
          if("phoneNumber" == snapshot.key)
            pn = snapshot.val();

        });
      })
    return pn;
  }


}
