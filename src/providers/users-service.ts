import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import * as firebase from 'firebase';
import {AngularFireDatabase, FirebaseListObservable} from "angularfire2/database";
import {Location} from "../models/location";
import {myDateTime} from "../models/myDateTime";




@Injectable()
export class UsersService {

  public  fireAuth: any;
  public  userProfile: any;
  public pProfile: any;
  public items :any ;


    constructor (public http: Http,private afDB: AngularFireDatabase){
    this.fireAuth = firebase.auth();
    this.userProfile = firebase.database().ref('user');
    this.pProfile = firebase.database().ref('professions');
  }



  loginUser(email : string,password : string){
    return this.fireAuth.signInWithEmailAndPassword(email, password);
  }


  logoutUser(){
    return this.fireAuth.signOut();
  }

  signUpUser(email : string,password : string , nameField :string, pnField : string){
    return this.fireAuth.createUserWithEmailAndPassword(email, password).then((newUser) =>{
      this.fireAuth.signInWithEmailAndPassword(email, password).then((authenticatedUser) =>{
        this.userProfile.child(authenticatedUser.uid).set({
          email: email , name : nameField , phoneNumber : pnField
        });
      });
    });
  }

  signUpP(email: string,password : string , nameField : string,
  phoneNumber : string,cname : string ,dateTime  : myDateTime[],location :Location ,text :string,profession : any){
    return this.fireAuth.createUserWithEmailAndPassword(email, password).then((newUser) =>{
      this.fireAuth.signInWithEmailAndPassword(email, password).then((authenticatedUser) =>{
        this.pProfile.child(profession+"/"+authenticatedUser.uid).set({
          email: email , name : nameField , phoneNumber : phoneNumber,
          cname : cname , dateTime : dateTime ,  location :  location , text :text
        });
      });
    });
  }


  forgotpassword(email:any){
    return this.fireAuth.sendPasswordResetEmail(email);
  }

  googleSignIn(){
    var provider = new firebase.auth.GoogleAuthProvider();
    //provider.addScope('https://www.googleapis.com/auth/plus.login');

    return firebase.auth().signInWithPopup(provider).then(function(result) {
      // This gives you a Google Access Token. You can use it to access the Google API.
      var token = result.credential.accessToken;
      // The signed-in user info.
      var user = result.user;
      // ...
    });


  }
  getUserId(){
    return firebase.auth().currentUser;
  }







}
