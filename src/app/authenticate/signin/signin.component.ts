import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { FirebaseService } from "src/app/services/firebase.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-signin",
  templateUrl: "./signin.component.html",
  styleUrls: ["./signin.component.scss"],
})
export class SigninComponent implements OnInit {
  constructor(private authService: FirebaseService, private router: Router) {}
  @Output() isLoggedInEventEmitter = new EventEmitter();
  signinFetching: boolean = false;

  async signin(email: string, password: string) {
    this.signinFetching = true;
    await this.authService.signin(email, password).then(() => {
      if (this.authService.isLoggedIn == true) {
        this.router.navigate(["acasa"]);
        this.signinFetching = false;
      }
    });
  }

  ngOnInit(): void {}
}
