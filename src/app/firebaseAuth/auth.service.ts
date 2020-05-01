import { Injectable, NgZone } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Router } from "@angular/router";
import { User } from './user'
import { error } from '@angular/compiler/src/util';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userData: any; // Save logged in user data
  userCollection: AngularFirestoreCollection<any>;
  collection: any;

  constructor(
    public afs: AngularFirestore,
    public afAuth: AngularFireAuth,
    public router: Router,
    public ngZone: NgZone
  ) {
    this.afAuth.authState.subscribe(user => {
      if (user) {
        this.userData = user;
        localStorage.setItem('user', JSON.stringify(this.userData));
        JSON.parse(localStorage.getItem('user'));
      } else {
        localStorage.setItem('user', null);
        JSON.parse(localStorage.getItem('user'));
      }
    })
  }
  //** Sign in with email/password  */
  signIn(email, password) {
    console.log(email);
    console.log(password);
    return this.afAuth.auth.signInWithEmailAndPassword(email, password).then((result) => {
      this.ngZone.run(() => {
        this.router.navigate(['dashboard'])
      });
      this.SetUserData(result.user);
    }).catch((error) => {
      window.alert(error.message)
    })
  }
  //** signUp with email,password */
  signUp(email, password) {
    console.log(email);
    console.log(password);
    return this.afAuth.auth.createUserWithEmailAndPassword(email, password).then((result) => {
      this.ngZone.run(() => {
        this.router.navigate(['sign-in'])
      });
      this.SetUserData(result.user);
    }).catch((error) => {
      window.alert(error.message)
    })
  }
    // Returns true when user is looged in and email is verified
    get isLoggedIn(): boolean {
      const user = JSON.parse(localStorage.getItem('user'));
      console.log(user)
      return (user !== null && user.emailVerified !== false) ? true : false;
    }
    
  SetUserData(user) {
    const userRef: AngularFirestoreDocument<any> = this.afs.doc(`users/${user.uid}`);
    const userData: User = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL,
      emailVerified: user.emailVerified,
    }
    return userRef.set(userData, {
      merge: true
    })
  }
  signout() {
    return this.afAuth.auth.signOut().then(() => {
      localStorage.removeItem('user');
      this.router.navigate(['sign-in'])
    })
  }

}
