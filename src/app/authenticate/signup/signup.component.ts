import { Component, OnInit } from "@angular/core";
import { FirebaseService } from "src/app/services/firebase.service";

@Component({
  selector: "app-signup",
  templateUrl: "./signup.component.html",
  styleUrls: ["./signup.component.scss"],
})
export class SignupComponent implements OnInit {
  constructor(private authService: FirebaseService) {}

  signup(email: string, password: string) {
    this.authService.signup(email, password);
  }

  ngOnInit(): void {}
}
