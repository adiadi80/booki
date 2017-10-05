import firebase from 'firebase';

export class AuthService{


  getActiveUser(){
   return firebase.auth().currentUser;
  }
}
