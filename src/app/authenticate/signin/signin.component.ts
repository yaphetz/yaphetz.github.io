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

  async signin(email: string, password: string) {
    await this.authService
      .signin(email, password)
      .then(()=> {
        if(this.authService.isLoggedIn == true)
        this.router.navigate(['acasa']);
      });
  }

  ngOnInit(): void {}
}
