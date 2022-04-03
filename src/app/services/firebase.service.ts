import { Injectable } from "@angular/core";
import { Router, CanActivate } from "@angular/router";
import { AngularFireAuth } from "@angular/fire/compat/auth";

@Injectable({
  providedIn: "root",
})
export class FirebaseService {
  isLoggedIn: boolean = false;
  constructor(public firebaseAuth: AngularFireAuth, private router: Router) {}

 async isUserLoggedIn() {}

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

  logout() {
    console.log(' pl')
    this.firebaseAuth.signOut();
    this.isLoggedIn = false;
    localStorage.removeItem("user");
  }

  canActivate(): boolean {
    if (!this.isLoggedIn) {
      this.router.navigate(["login"]);
      return false;
    }
    return true;
  }

}
