import { Injectable } from "@angular/core";
import { Router, CanActivate } from "@angular/router";
import { AngularFireAuth } from "@angular/fire/compat/auth";
import { Observable, from } from "rxjs";
import { take } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class FirebaseService {
  isLoggedIn: boolean = false;
  user$: Observable<any>;
  constructor(public firebaseAuth: AngularFireAuth, private router: Router) {
    this.user$ = this.firebaseAuth.authState;
  }

  async signin(email: string, password: string) {
    await this.firebaseAuth
      .signInWithEmailAndPassword(email, password)
      .then((res) => {
        this.isLoggedIn = true;
        localStorage.setItem("user", JSON.stringify(res.user));
      });
  }

  async signup(email: string, password: string) {
    await this.firebaseAuth
      .createUserWithEmailAndPassword(email, password)
      .then((res) => {
        this.isLoggedIn = true;
        localStorage.setItem("user", JSON.stringify(res.user));
      });
  }

  async logout() {
    console.log("Log out");
    await this.firebaseAuth.signOut();
    this.isLoggedIn = false;
    localStorage.removeItem("user");
    this.router.navigate(['login'])
  }

  canActivates(): boolean {
    if (!this.isLoggedIn) {
      this.router.navigate(["login"]);
      return false;
    }
    return true;
  }

}
