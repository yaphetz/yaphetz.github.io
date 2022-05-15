import { Component, OnInit, Output } from "@angular/core";
import { FirebaseService } from "../services/firebase.service";
import { AdminGuard } from "../core/admin.guard";
import { BehaviorSubject, from, Observable } from "rxjs";
import { User } from "../models/user.model";

@Component({
  selector: "app-side-menu",
  templateUrl: "./side-menu.component.html",
  styleUrls: ["./side-menu.component.scss"],
})
export class SideMenuComponent implements OnInit {
  toolbarToggle: boolean = true;
  menuItems: any;
  displayName: string;
  permission = this.adminGuard.menuAuthenticated("student");
  isAdmin: boolean = false;
  isAdminSubject: BehaviorSubject<boolean> = new BehaviorSubject(false);
  user: User;

  constructor(
    public authService: FirebaseService,
    public adminGuard: AdminGuard
  ) {
    this.authService.user$.subscribe((user) => {
      this.user = user;
      this.displayName = user.displayName;
      this.setPermissions()
    });
  }

  logout() {
    this.authService.logout();
  }

  hasAcces(roles) {
    return this.authService.checkAuthorization(this.user, roles);
  }

  ngOnInit(): void {
    this.menuItems = [
      {
        name: "Cerere nouă",
        route: "acasa",
        role: ["student", "profesor", "secretariat"],
      },
      {
        name: "Schițe",
        route: "drafts",
        role: ["student", "profesor", "secretariat"],
      },
      {
        name: "Istoric cereri",
        role: ["student", "profesor", "secretariat"],
      },
      {
        name: "Form builder",
        route: "form-builder",
        role: ["secretariat"],
        class: "restricted"
      },
      {
        name: "Șabloane",
        route: "templates",
        role: ["secretariat"],
        class: "restricted"
      },
      {
        name: "Depuneri",
        route: "submissions",
        role: ["secretariat"],
        class: "restricted"
      },
    ];

  }

  setPermissions() {
    for (let menuItem of this.menuItems) {
      menuItem.hasAcces = this.hasAcces(menuItem.role)
    }
  }
}
